import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./logon.css";

axios.defaults.withCredentials = true; // Importante para sessões

const API_URL = "http://localhost:4000"; // Backend local

function Logon() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, setUser] = useState<any>(null);

  const register = async () => {
    try {
      await axios.post(`${API_URL}/auth/register`, { name, email, password });
      alert("Cadastro feito!");
    } catch (err: any) {
      alert(err.response?.data?.error || "Erro");
    }
  };



  const login = async () => {
    try {
      await axios.post(`${API_URL}/auth/login`, { email, password });
      const res = await axios.get(`${API_URL}/auth/me`);
      setUser(res.data);
    } catch (err: any) {
      alert(err.response?.data?.error || "Erro");
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

    <div className="login">

<div className="bgc-login">

</div>


    <div className="form-login">
      
      <h1 className="login-title">Cadastre - se</h1>
      <h2>Crie sua conta</h2>

      {user ? (
        <>
          <p>Logado como: {user.name}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <input
            className="input-login"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br />
          <input
            className="input-login"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <input
            className="input-login"
            placeholder="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />

          <button className="enter-btn" onClick={register}>
            Finalizar
          </button>
          <hr />
          <button className="login-google" onClick={loginGoogle}> <img src="./src/assets/search.png" alt="" />  Entrar com Google</button>
          

          <Link to="/cadastrar">
              <h3 id="have-c">Não possuo uma conta</h3>
          </Link>
      
        
        </>

        
      )}
    </div>
   
    </div>

    
  );
}

export default Logon;
