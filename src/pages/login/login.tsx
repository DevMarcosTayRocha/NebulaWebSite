import { useState } from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true; // Importante para sessões

const API_URL = 'http://localhost:4000'; // Backend local

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [user, setUser] = useState<any>(null);

  const register = async () => {
    try {
      await axios.post(`${API_URL}/auth/register`, { name, email, password });
      alert('Cadastro feito!');
    } catch (err: any) {
      alert(err.response?.data?.error || 'Erro');
    }
  };

  const login = async () => {
    try {
      await axios.post(`${API_URL}/auth/login`, { email, password });
      const res = await axios.get(`${API_URL}/auth/me`);
      setUser(res.data);
    } catch (err: any) {
      alert(err.response?.data?.error || 'Erro');
    }
  };

  const logout = async () => {
    await axios.get(`${API_URL}/auth/logout`);
    setUser(null);
  };

  const loginGoogle = () => {
    window.location.href = `${API_URL}/auth/google`;
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Login Teste</h1>

      {user ? (
        <>
          <p>Logado como: {user.name}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <input
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          /><br />
          <input
            placeholder="Email"
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          /><br />
          <input
            placeholder="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          /><br />
          <button onClick={register}>Cadastrar</button>
          <button onClick={login}>Entrar</button>
          <hr />
          <button onClick={loginGoogle}>Entrar com Google</button>
        </>
      )}
    </div>
  );
}

export default App;