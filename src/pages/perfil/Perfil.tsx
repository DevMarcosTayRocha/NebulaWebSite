import "./perfil.css";
import "../../index.css";
import { useState } from "react";
import { Menu } from "../../components/Menu";
import { Rank } from "./components/rank";
import { BarraDeProgresso } from "./components/barraProgresso";
import Footer from "../../components/footer";

function Perfil() {
  const [mostrarEditor, setMostrarEditor] = useState(false);

  // Estados dos dados do usuário
  const [nome, setNome] = useState("Luiz Tavares");
  const [biografia, setBiografia] = useState(
    "Apaixonado por conhecimento e tecnologia."
  );
  const [fotoUrl, setFotoUrl] = useState("/icones-usuarios/FotoPerfil5.jpg");

  // Estados temporários para edição
  const [nomeEditado, setNomeEditado] = useState(nome);
  const [bioEditada, setBioEditada] = useState(biografia);
  const [fotoEditada, setFotoEditada] = useState(fotoUrl);

  // Função ao clicar em "Enviar"
  const salvarEdicao = () => {
    setNome(nomeEditado);
    setBiografia(bioEditada);
    setFotoUrl(fotoEditada);
    setMostrarEditor(false);
  };

  return (
    <div className="container">
      <div className="container-perfil">
        <Menu />

        <div id="prf-containerAll">
          <div className="prf-banner"></div>

          <div className="prf-usuario-barra">
            <div className="prf-container">
              <img className="prf-foto" src={fotoUrl} alt="Foto de perfil" />

              <div className="prf-infomacoes">
                <div className="prf-nome-usuario">
                  <span>{nome}</span>
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

              {/* BOTÃO DE EDITAR */}
              <div
                className="prf-editar"
                onClick={() => setMostrarEditor(true)}
              >
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

              {/* MODAL DE EDIÇÃO */}
              {mostrarEditor && (
                <div
                  className="prf-modal-backdrop"
                  onClick={() => setMostrarEditor(false)}
                >
                  <div
                    className="aba-editar"
                    onClick={(e) => e.stopPropagation()} // impede fechar ao clicar dentro
                  >
                    <div className="prf-edicao">
                      <input
                      className="prf-editar-nome"
                        type="text"
                        value={nomeEditado}
                        placeholder="Nome"
                        onChange={(e) => setNomeEditado(e.target.value)}
                      />
                      <textarea
                      className="prf-editar-biografia"
                        value={bioEditada}
                        placeholder="Biografia"
                        rows={5}
                        onChange={(e) => setBioEditada(e.target.value)}
                      />
                      
                      <div className="prf-add-imagem">
                      <label htmlFor="prf-editar-imagem">ESCOLHA UMA IMAGEM</label>
                      <input
                        id="prf-editar-imagem"
                        hidden
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const imageUrl = URL.createObjectURL(file);
                            setFotoEditada(imageUrl);
                          }
                        }}
                      />
                      </div>

                      {fotoEditada && (
                        <div className="prf-preview-imagem">
                          <img
                            src={fotoEditada}
                            alt="Prévia da imagem"
                            className="prf-preview-img"
                          />
                        </div>
                      )}

                      <button className="prf-botao-editar-enviar" onClick={salvarEdicao}>ENVIAR</button>
                    </div>
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
