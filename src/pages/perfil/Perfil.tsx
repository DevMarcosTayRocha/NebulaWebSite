import "./perfil.css";
import "../../index.css";
import { Menu } from "../../components/Menu";
import { Rank } from "./components/rank";
import { BarraDeProgresso } from "./components/barraProgresso";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../components/footer";

interface User {
  idsite: string;
  id: string;
  name: string;
  email: string;
  photo: string;
  provider: string;
  prf_user: string;
  bio: string;
}

function Perfil() {
  const [user, setUser] = useState<User | null>(null);
  const [mostrarEditor, setMostrarEditor] = useState(false);

  const [nome, setNome] = useState("");
  const [bio, setBio] = useState("");
  const [idUser, setIdUser] = useState("");
  const [foto, setFoto] = useState<File | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:4000/auth/me", { withCredentials: true })
      .then((res) => {
        setUser(res.data);
        setIsAuthenticated(true);
      })
      .catch(() => {
        setUser(null);
        setIsAuthenticated(false);
      });
  }, []);

  function editButton() {
    if (user) {
      setNome(user.name);
      setBio(user.bio || "");
      setIdUser(user.prf_user);
    }
    setMostrarEditor((prev) => !prev);
  }

  function enviarEdicao() {
    const formData = new FormData();
    formData.append("name", nome);
    formData.append("bio", bio);
    formData.append("idUser", idUser);
    if (foto) {
      formData.append("photo", foto);
    }

    axios
      .put("http://localhost:4000/auth/update", formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setUser(res.data.user);
        setMostrarEditor(false);
        alert("Perfil atualizado!");
      })
      .catch((err) => {
        console.error(err);
        alert("Erro ao atualizar perfil.");
      });
  }

  // Para sem o Banco de Dados para o site:

  const [editando, setEditando] = useState(false);
  const [newNome, setNewNome] = useState("Luiz Tavares");
  const [biografia, setBiografia] = useState(
    "Sou Luiz Tavares, um garoto apaixonado por física. Desde pequeno, sempre me intrigaram as perguntas sobre como o universo funciona. Gosto de aprender e descobrir os segredos das leis da natureza, e espero usar esse conhecimento para fazer a diferença no mundo. Estou sempre curioso e animado para explorar novos conceitos e desafios no campo da física."
  );
  const [fotoUrl, setFotoUrl] = useState("/icones-usuarios/FotoPerfil5.jpg");

  const [novaFoto, setNovaFoto] = useState("");

  const [novoNome, setNovoNome] = useState(nome);
  const [novaBiografia, setNovaBiografia] = useState(biografia);
  const [novaFotoUrl, setNovaFotoUrl] = useState(fotoUrl);

  function iniciarEdicao() {
    setNovoNome(nome);
    setNovaBiografia(biografia);
    setNovaFotoUrl(fotoUrl);
    setEditando(true);
  }

  function aplicarAlteracoes() {
    setNome(novoNome);
    setBiografia(novaBiografia);
    setFotoUrl(novaFotoUrl);
    setEditando(false);
  }
  return (
    <div className="container">
      <div className="container-perfil">
        <Menu />

        <div id="prf-containerAll">
          {/*  BANNER */}
          <div className="prf-banner"></div>

          {/* BARRA USUARIO */}
          <div className="prf-usuario-barra">
            <div className="prf-container">
              <img
                className="prf-foto" src={fotoUrl}
              />
              <div className="prf-infomacoes">
                <div className="prf-nome-usuario">
                  <span>{newNome}</span>
                </div>
                <div className="prf-usuario-rank">
                  <div className="prf-usuario">
                    <span>luiztavares</span>
                  </div>
                  <div className="prf-rank">
                    <span>#0025</span>
                  </div>
                </div>
              </div>
              <div className="prf-editar" onClick={iniciarEdicao}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#FFFFFF"
                >
                  <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
                </svg>
              </div>

              {mostrarEditor && (
                <div className="prf-modal-backdrop" onClick={() => setMostrarEditor(false)}>
                  <div
                    className="aba-editar"
                    onClick={(e) => e.stopPropagation()} // impede fechamento ao clicar dentro
                  >
                    {editando && (
                      <div className="prf-edicao">
                        <input
                          type="text"
                          value={novoNome}
                          onChange={(e) => setNovoNome(e.target.value)}
                          placeholder="Nome"
                        />
                        <textarea
                          value={novaBiografia}
                          onChange={(e) => setNovaBiografia(e.target.value)}
                          placeholder="Biografia"
                          rows={5}
                        />
                        <input
                          type="text"
                          value={novaFotoUrl}
                          onChange={(e) => setNovaFotoUrl(e.target.value)}
                          placeholder="URL da nova foto"
                        />

                        <button onClick={aplicarAlteracoes}>Enviar</button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="prf-container2">
            <div className="prf-colunas">
              <div className="prf-coluna1">
                <div className="prf-biografia">
                  <span>{biografia}</span>
                </div>

                <BarraDeProgresso />
              </div>
              <div className="prf-coluna2">
                <Rank />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Perfil;
