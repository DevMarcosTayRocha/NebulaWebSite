import "./perfil.css";
import "../../index.css"
import { Menu } from "../../components/Menu";
import { Rank } from "./components/rank";
import { BarraDeProgresso } from "./components/barraProgresso";

function Perfil() {

  return (
    <>
    <Menu/>

      <div id="container">

      
      {/*  BANNER */}
      <div className="prf-banner"></div>

      {/* BARRA USUARIO */}
      <div className="prf-usuario-barra">
        <div className="prf-container">
          <div style={{ backgroundImage: `url(./src/assets/fotoUsuarioExemple.jpg)` }} className="prf-foto" />
          <div className="prf-infomacoes">
            <div className="prf-nome-usuario">
              <span>Fulano</span>
            </div>
            <div className="prf-usuario-rank">
              <div className="prf-usuario">
                <span>@usuario1000</span>
              </div>
              <div className="prf-rank">
                <span>#1000</span>
              </div>
            </div>
          </div>
          <div className="prf-editar">
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
        </div>
      </div>

      <div className="prf-container2">
        <div className="prf-colunas">
          <div className="prf-coluna1">
            <div className="prf-biografia">
              <span>
                Sem biografia...
              </span>
            </div>

            <BarraDeProgresso />

          </div>
          <div className="prf-coluna2">

            <Rank/>

          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Perfil;