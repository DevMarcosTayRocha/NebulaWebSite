import "./avaliacoes.css";
import { useState } from "react";
import { avaliacoes1 } from "./avaliacoesDados";
import { avaliacoes2 } from "./avaliacoesDados";

function Avaliacoes() {

  const [containerHeight, setContainerHeight] = useState(1000);

  const maisAvaliacoes = () => {
    const containerTamanhoTotal = document.getElementById(
      "container-comentarios"
    );

    const setaMaisAvaliacoes = document.getElementById("avl-seta-mais");
    if (!containerTamanhoTotal) return;

    const totalHeight = containerTamanhoTotal.scrollHeight;
    console.log("Tamanho do container Total: " + totalHeight);

    if (containerHeight + 1000 <= totalHeight) {
      setContainerHeight((prev) => prev + 1000);
      setaMaisAvaliacoes.style.transform = "rotate(0deg)";
    }

    if (containerHeight + 1000 > totalHeight) {
      setContainerHeight(totalHeight);
      setaMaisAvaliacoes.style.transform = "rotate(180deg)";
    }

    if (containerHeight == totalHeight) {
      setContainerHeight(1000);
      setaMaisAvaliacoes.style.transform = "rotate(0deg)";
    }
  };

  let abreFechaFiltrosTrue = false;

  const filtroEstrela = (qualEstrela: number) => {
    for (let i = 1; i <= 5; i++) {
      const estrela = document.getElementById(`estrela-filtro-${i}`);
      if (estrela) {
        estrela.style.filter =
          i === qualEstrela ? "grayscale(0%)" : "grayscale(100%)";
      }
    }
  };

  const abreFechaFiltro = (trueClick: boolean) => {
    const filtrosExtra = document.getElementById("filtros-extra");
    if (!filtrosExtra) return;

    if (trueClick) {
      abreFechaFiltrosTrue = !abreFechaFiltrosTrue;
      filtrosExtra.style.width = "250px";
      filtrosExtra.style.height = "auto";
      filtrosExtra.style.padding = "25px";
      document.onclick = () => {
        setTimeout(() => {
          if (!abreFechaFiltrosTrue) {
            filtrosExtra.style.width = "0px";
            filtrosExtra.style.height = "0px";
            filtrosExtra.style.padding = "0px";
          }
        }, 50);
      };
    } else {
      document.onclick = () => { };
    }
  };

  return (
    <>
      <div className="container-avaliacoes">
        <div className="sessao">
          <h1>AVALIAÇÕES</h1>
          <hr />
        </div>

        <div className="container-nav-estrelas">
          <nav className="nav-estrelas-demo">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} onClick={() => filtroEstrela(num)}>
                <p>{num}</p>
                <img
                  id={`estrela-filtro-${num}`}
                  src="/estrela-clara.svg"
                  alt={`Estrela ${num}`}
                />
              </div>
            ))}
          </nav>
          <div className="button-filtros" onClick={() => abreFechaFiltro(true)}>
            <p>Filtros</p>
            <img src="/filtros.svg" />
            <div
              className="button-filtros-div-extra"
              id="filtros-extra"
              onClick={() => abreFechaFiltro(true)}
            >
              <div className="filtros-extra-titulo">
                <h2>Filtros</h2>
                <img
                  src="/close.svg"
                  onClick={() => abreFechaFiltro(true)}
                />
              </div>
              <div className="filtros-extra">ÓRBITA</div>
              <div className="filtros-extra">GALÁXIA</div>
              <div className="filtros-extra">UNIVERSO</div>
            </div>
          </div>
        </div>
        <div
          className="container-nav-comentarios"
          id="container-comentarios"
          style={{ height: `${containerHeight}px` }}
        >

          <div className="nav-comentarios">
            {avaliacoes1.map((item, index) => (
              <div className="comentario" key={index}>
                <div className="comentario-content">
                  <div className="comentario-usuario">
                    <img className="comentario-usuario-icon" src={item.foto} alt="Foto do usuário" />
                    <div className="comentario-usuario-titulo">
                      <h3>{item.nome}</h3>
                      <h4>Cursa - {item.curso}</h4>
                    </div>
                  </div>
                  <div className="comentario-avaliacao">
                    {[...Array(5)].map((_, i) => (
                      <img
                        key={i}
                        src={
                          i < item.estrelas
                            ? "/estrela-clara.svg"
                            : "/estrela-escura.svg"
                        }
                        alt={`Estrela ${i + 1}`}
                      />
                    ))}
                  </div>
                  <p className="comentario-conteudo">{item.texto}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="nav-comentarios">
            {avaliacoes2.map((item, index) => (
              <div className="comentario" key={index}>
                <div className="comentario-content">
                  <div className="comentario-usuario">
                    <img className="comentario-usuario-icon" src={item.foto} alt="Foto do usuário" />
                    <div className="comentario-usuario-titulo">
                      <h3>{item.nome}</h3>
                      <h4>Cursa - {item.curso}</h4>
                    </div>
                  </div>
                  <div className="comentario-avaliacao">
                    {[...Array(5)].map((_, i) => (
                      <img
                        key={i}
                        src={
                          i < item.estrelas
                            ? "/estrela-clara.svg"
                            : "/estrela-escura.svg"
                        }
                        alt={`Estrela ${i + 1}`}
                      />
                    ))}
                  </div>
                  <p className="comentario-conteudo">{item.texto}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="nav-comentarios">
            {avaliacoes1.map((item, index) => (
              <div className="comentario" key={index}>
                <div className="comentario-content">
                  <div className="comentario-usuario">
                    <img className="comentario-usuario-icon" src={item.foto} alt="Foto do usuário" />
                    <div className="comentario-usuario-titulo">
                      <h3>{item.nome}</h3>
                      <h4>Cursa - {item.curso}</h4>
                    </div>
                  </div>
                  <div className="comentario-avaliacao">
                    {[...Array(5)].map((_, i) => (
                      <img
                        key={i}
                        src={
                          i < item.estrelas
                            ? "/estrela-clara.svg"
                            : "/estrela-escura.svg"
                        }
                        alt={`Estrela ${i + 1}`}
                      />
                    ))}
                  </div>
                  <p className="comentario-conteudo">{item.texto}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="nav-comentarios">
            {avaliacoes2.map((item, index) => (
              <div className="comentario" key={index}>
                <div className="comentario-content">
                  <div className="comentario-usuario">
                    <img className="comentario-usuario-icon" src={item.foto} alt="Foto do usuário" />
                    <div className="comentario-usuario-titulo">
                      <h3>{item.nome}</h3>
                      <h4>Cursa - {item.curso}</h4>
                    </div>
                  </div>
                  <div className="comentario-avaliacao">
                    {[...Array(5)].map((_, i) => (
                      <img
                        key={i}
                        src={
                          i < item.estrelas
                            ? "/estrela-clara.svg"
                            : "/estrela-escura.svg"
                        }
                        alt={`Estrela ${i + 1}`}
                      />
                    ))}
                  </div>
                  <p className="comentario-conteudo">{item.texto}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
        <div className="button-mais-comentarios" onClick={maisAvaliacoes}>
          <svg
            id="avl-seta-mais"
            style={{ transition: "100ms" }}
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#FFFFFF"
          >
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </div>
      </div>
    </>
  );
}

export default Avaliacoes;
