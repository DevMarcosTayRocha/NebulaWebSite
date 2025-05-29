import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import passport from 'passport';
import session from 'express-session';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

dotenv.config();

const app = express();
const PORT = 4000;
const CLIENT_URL = process.env.CLIENT_URL!;
const USERS_FILE = path.join(__dirname, 'users.json');

function getNextIdSite(): number {
  const users = readUsers();
  if (users.length === 0) return 1;

  const maxId = Math.max(...users.map(u => u.idsite as number));
  return maxId + 1;
}

const asyncHandler = (
  fn: (req: Request, res: Response, next: NextFunction) => Promise<any>
) => (req: Request, res: Response, next: NextFunction) => {
  fn(req, res, next).catch(next);
};


// Tipos

interface UserType {
  idsite: Number;
  id: string;
  name: string;
  email: string;
  photo: string;
  password: string;
  provider: 'google' | 'local';
  prf_user: string;
}

// Utilidades
function readUsers(): UserType[] {
  try {
    return JSON.parse(fs.readFileSync(USERS_FILE, 'utf-8'));
  } catch {
    return [];
  }
}

function saveUsers(users: UserType[]) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

// Middlewares
app.use(express.json());

app.use(session({
  secret: process.env.SESSION_SECRET || 'uma-chave-muito-secreta',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true
  }
}));

const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174'];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));


app.use(passport.initialize());
app.use(passport.session());

// Passport Google
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID!,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  callbackURL: "/auth/google/callback"
}, (accessToken, refreshToken, profile, done) => {
  const userData: UserType = {
    idsite: getNextIdSite(),
    id: profile.id,
    name: profile.displayName,
    email: profile.emails?.[0].value || '',
    photo: profile.photos?.[0].value || '',
    password: '',
    provider: 'google',
    prf_user: `@${profile.displayName.replace(/\s/g, '')}${getNextIdSite()}`
  };


  console.log("Usuário autenticado:", userData);

  const users = readUsers();

  const existingUser = users.find(u => u.id === userData.id || u.email === userData.email);

  if (!existingUser) {
    users.push(userData);
    saveUsers(users);
    console.log("Novo usuário Google salvo:", userData);
    return done(null, userData);
  } else {
    console.log("Usuário Google já existente:", existingUser);
    return done(null, existingUser);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user: any, done) => {
  if (user && user.id) {
    done(null, user);
  } else {
    done(new Error('Usuário inválido'), null);
  }
});

// Rotas Google OAuth
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => res.redirect(`${CLIENT_URL}/`)
);

// Rota para obter usuário logado
app.get('/auth/me', (req, res) => {
  if (req.isAuthenticated()) {
    res.json(req.user);
  } else {
    res.status(401).json({ error: "Não autenticado" });
  }
});

// Logout
app.get('/auth/logout', (req, res) => {
  req.logout(() => {
    req.session.destroy(err => {
      res.clearCookie('connect.sid');
      res.redirect(CLIENT_URL);
    });
  });
});

// Cadastro local
app.post('/auth/register', asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const users = readUsers();

  if (users.find(u => u.email === email)) {
    return res.status(409).json({ error: 'Email já cadastrado' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser: UserType = {
    idsite: getNextIdSite(),
    id: uuidv4(),
    name,
    email,
    password: hashedPassword,
    photo: 'https://images.vexels.com/media/users/3/235233/isolated/preview/be93f74201bee65ad7f8678f0869143a-cracha-de-perfil-de-capacete-de-astronauta.png',
    provider: 'local',
    prf_user: `@${name.replace(/\s/g, '')}${getNextIdSite()}`
  };

  users.push(newUser);
  saveUsers(users);

  res.status(201).json({ message: 'Usuário registrado com sucesso' });
}));

// Login local
app.post('/auth/login', asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const users = readUsers();

  const user = users.find(u => u.email === email && u.provider === 'local');
  if (!user) return res.status(401).json({ error: 'Usuário local não encontrado' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ error: 'Senha incorreta' });

  req.login(user, (err) => {
    if (err) return res.status(500).json({ error: 'Erro ao autenticar' });
    res.json({ message: 'Login bem-sucedido', user });
  });
}));


// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor backend em http://localhost:${PORT}`);
});
