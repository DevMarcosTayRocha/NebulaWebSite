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

  useEffect(() => {
    axios
      .get("http://localhost:4000/auth/me", { withCredentials: true })
      .then((res) => setUser(res.data))
      .catch(() => setUser(null));
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

  return (
    <div className="container-perfil">
      <Menu />

      <div id="prf-containerAll">
        {/*  BANNER */}
        <div className="prf-banner"></div>

        {/* BARRA USUARIO */}
        <div className="prf-usuario-barra">
          <div className="prf-container">
            <div
              style={{
                backgroundImage: `url(${
                  user?.photo
                    ? user.photo.startsWith("http")
                      ? `${user.photo}?t=${Date.now()}`
                      : `http://localhost:4000${user.photo}?t=${Date.now()}`
                    : "https://via.placeholder.com/150?text=Usuário"
                })`,
              }}
              className="prf-foto"
            />
            <div className="prf-infomacoes">
              <div className="prf-nome-usuario">
                <span>{user?.name}</span>
              </div>
              <div className="prf-usuario-rank">
                <div className="prf-usuario">
                  <span>{user?.prf_user}</span>
                </div>
                <div className="prf-rank">
                  <span>#1000</span>
                </div>
              </div>
            </div>
            <div className="prf-editar" onClick={editButton}>
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
              <div className="aba-editar">
                <label htmlFor="edit-nome">Nome de usuário</label>
                <input
                  type="text"
                  name="edit-nome"
                  placeholder="Digite o nome de usuário"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />

                <label htmlFor="bio">Biografia</label>
                <input
                  type="text"
                  name="bio"
                  placeholder="Digite a sua biografia"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />

                <label htmlFor="idUser">ID de usuário</label>
                <input
                  type="text"
                  name="idUser"
                  placeholder="Digite seu ID de usuário"
                  value={idUser}
                  onChange={(e) => setIdUser(e.target.value)}
                />

                <label htmlFor="foto">Foto de perfil</label>
                <input
                  type="file"
                  name="foto"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setFoto(e.target.files[0]);
                    }
                  }}
                />

                <button onClick={enviarEdicao}>Salvar alterações</button>
              </div>
            )}
          </div>
        </div>

        <div className="prf-container2">
          <div className="prf-colunas">
            <div className="prf-coluna1">
              <div className="prf-biografia">
                <span>{user?.bio}</span>
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
  );
}

export default Perfil;
