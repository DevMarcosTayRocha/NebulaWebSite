import "./avaliacoes.css";
import { useState } from "react";

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
                  src="./src/assets/estrela-clara.svg"
                  alt={`Estrela ${num}`}
                />
              </div>
            ))}
          </nav>
          <div className="button-filtros" onClick={() => abreFechaFiltro(true)}>
            <p>Filtros</p>
            <img src="./src/assets/filtros.svg" />
            <div
              className="button-filtros-div-extra"
              id="filtros-extra"
              onClick={() => abreFechaFiltro(true)}
            >
              <div className="filtros-extra-titulo">
                <h2>Filtros</h2>
                <img
                  src="./src/assets/close.svg"
                  onClick={() => abreFechaFiltro(true)}
                />
              </div>
              <div className="filtros-extra-input">Data</div>
              <div className="filtros-extra-input">Curso</div>
              <div className="filtros-extra-aplicar">Aplicar</div>
            </div>
          </div>
        </div>
        <div
          className="container-nav-comentarios"
          id="container-comentarios"
          style={{ height: `${containerHeight}px` }}
        >
          <div className="nav-comentarios">
            <div className="comentario">
              <div className="comentario-content">
                <div className="comentario-usuario">
                  <img className="comentario-usuario-icon" />
                  <div className="comentario-usuario-titulo">
                    <h3>Sofia Neves</h3>
                    <h4>Cursa - Poeira</h4>
                  </div>
                </div>
                <div className="comentario-avaliacao">
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                </div>
                <p className="comentario-conteudo">
                  Tem pontos positivos, mas poderia ter mais exercícios e desafios.
                </p>
              </div>
            </div>

            <div className="comentario">
              <div className="comentario-content">
                <div className="comentario-usuario">
                  <img className="comentario-usuario-icon" />
                  <div className="comentario-usuario-titulo">
                    <h3>Carlos Mendes</h3>
                    <h4>Cursa - Nebulosa</h4>
                  </div>
                </div>
                <div className="comentario-avaliacao">
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                </div>
                <p className="comentario-conteudo">
                  Muito bom! As explicações são claras e os exemplos ajudam bastante.
                </p>
              </div>
            </div>

            <div className="comentario">
              <div className="comentario-content">
                <div className="comentario-usuario">
                  <img className="comentario-usuario-icon" />
                  <div className="comentario-usuario-titulo">
                    <h3>Bruno Martins</h3>
                    <h4>Cursa - Nuvem</h4>
                  </div>
                </div>
                <div className="comentario-avaliacao">
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                </div>
                <p className="comentario-conteudo">
                  O conteúdo é bom, mas falta mais interatividade. Tem muito vídeo, mas poucos desafios ou testes práticos. Acho que pra fixar mesmo, seria legal ter simulações ou experimentos.
                </p>
              </div>
            </div>

            <div className="comentario">
              <div className="comentario-content">
                <div className="comentario-usuario">
                  <img className="comentario-usuario-icon" />
                  <div className="comentario-usuario-titulo">
                    <h3>Elisa Faria</h3>
                    <h4>Cursa - Poeira</h4>
                  </div>
                </div>
                <div className="comentario-avaliacao">
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                </div>
                <p className="comentario-conteudo">
                  Comecei empolgada, e o curso me ajudou com os fundamentos, mas achei que os módulos mais avançados não aprofundaram tanto quanto eu esperava. Fica a sugestão de expandir esses temas.
                </p>
              </div>
            </div>

            <div className="comentario">
              <div className="comentario-content">
                <div className="comentario-usuario">
                  <img className="comentario-usuario-icon" />
                  <div className="comentario-usuario-titulo">
                    <h3>Eduardo Campos</h3>
                    <h4>Cursa - Nebulosa</h4>
                  </div>
                </div>
                <div className="comentario-avaliacao">
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                </div>
                <p className="comentario-conteudo">
                  Achei o curso muito bonito na apresentação, mas na prática senti falta de aprofundamento. As aulas são curtas demais em alguns pontos e repetem informações. Não me senti desafiado.
                </p>
              </div>
            </div>

            <div className="comentario">
              <div className="comentario-content">
                <div className="comentario-usuario">
                  <img className="comentario-usuario-icon" />
                  <div className="comentario-usuario-titulo">
                    <h3>Isabela Rocha</h3>
                    <h4>Cursa - Nuvem</h4>
                  </div>
                </div>
                <div className="comentario-avaliacao">
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                </div>
                <p className="comentario-conteudo">
                  A proposta do curso é excelente e realmente funciona. Só não dei 5 estrelas porque acho que poderia ter mais aulas ao vivo ou lives de interação. No mais, estou aprendendo muito e me sinto muito mais confiante com temas de física.
                </p>
              </div>
            </div>

            <div className="comentario">
              <div className="comentario-content">
                <div className="comentario-usuario">
                  <img className="comentario-usuario-icon" />
                  <div className="comentario-usuario-titulo">
                    <h3>Marina Silva</h3>
                    <h4>Cursa - Poeira</h4>
                  </div>
                </div>
                <div className="comentario-avaliacao">
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                </div>
                <p className="comentario-conteudo">
                  Fiz o curso do início ao fim e não tenho palavras! As aulas são envolventes, os professores têm uma didática excelente e o conteúdo é riquíssimo. Comecei sem saber nada sobre astronomia e hoje estou participando de uma olimpíada científica da área. O PDF complementar ajuda muito quando quero revisar longe do computador. Recomendo de olhos fechados!
                </p>
              </div>
            </div>

            <div className="comentario">
              <div className="comentario-content">
                <div className="comentario-usuario">
                  <img className="comentario-usuario-icon" />
                  <div className="comentario-usuario-titulo">
                    <h3>Renata Barbosa</h3>
                    <h4>Cursa - Nebulosa</h4>
                  </div>
                </div>
                <div className="comentario-avaliacao">
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                </div>
                <p className="comentario-conteudo">
                  Não gostei. Achei o curso muito teórico e mal organizado. Entrei achando que ia aprender com atividades práticas, mas foi só vídeo e leitura.
                </p>
              </div>
            </div>

            <div className="comentario">
              <div className="comentario-content">
                <div className="comentario-usuario">
                  <img className="comentario-usuario-icon" />
                  <div className="comentario-usuario-titulo">
                    <h3>João Pedro</h3>
                    <h4>Cursa - Nuvem</h4>
                  </div>
                </div>
                <div className="comentario-avaliacao">
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                </div>
                <p className="comentario-conteudo">
                  Comecei sem grandes expectativas e acabei me apaixonando. As explicações são claras e bem organizadas. Gosto de poder assistir no meu tempo e rever as aulas. O fórum também foi essencial, os professores respondem com atenção. Já indiquei pra vários amigos.
                </p>
              </div>
            </div>
          </div>

          <div className="nav-comentarios">
            <div className="comentario">
              <div className="comentario-content">
                <div className="comentario-usuario">
                  <img className="comentario-usuario-icon" />
                  <div className="comentario-usuario-titulo">
                    <h3>Lucas Azevedo</h3>
                    <h4>Cursa - Nebulosa</h4>
                  </div>
                </div>
                <div className="comentario-avaliacao">
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                </div>
                <p className="comentario-conteudo">
                  O curso é legal, mas tem alguns problemas técnicos. O áudio de algumas aulas está mais baixo e tive que usar fone. Fora isso, o conteúdo está bem explicado e dá pra aprender bastante.
                </p>
              </div>
            </div>

            <div className="comentario">
              <div className="comentario-content">
                <div className="comentario-usuario">
                  <img className="comentario-usuario-icon" />
                  <div className="comentario-usuario-titulo">
                    <h3>Rafael Torres</h3>
                    <h4>Cursa - Nuvem</h4>
                  </div>
                </div>
                <div className="comentario-avaliacao">
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                </div>
                <p className="comentario-conteudo">
                  Vale cada centavo. Fiquei impressionado com a didática e a forma como assuntos complexos são tratados. Só acho que o layout da plataforma poderia ser um pouco mais moderno, mas o conteúdo em si é top!
                </p>
              </div>
            </div>

            <div className="comentario">
              <div className="comentario-content">
                <div className="comentario-usuario">
                  <img className="comentario-usuario-icon" />
                  <div className="comentario-usuario-titulo">
                    <h3>Camila Duarte</h3>
                    <h4>Cursa - Nebulosa</h4>
                  </div>
                </div>
                <div className="comentario-avaliacao">
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                </div>
                <p className="comentario-conteudo">
                  É bom pra quem está começando, mas pra quem já leu sobre astronomia antes, vai achar meio básico. Mesmo assim, tem um valor educativo e pode ser uma boa introdução.
                </p>
              </div>
            </div>

            <div className="comentario">
              <div className="comentario-content">
                <div className="comentario-usuario">
                  <img className="comentario-usuario-icon" />
                  <div className="comentario-usuario-titulo">
                    <h3>Carolina Soares</h3>
                    <h4>Cursa - Poeira</h4>
                  </div>
                </div>
                <div className="comentario-avaliacao">
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                </div>
                <p className="comentario-conteudo">
                  Demorei pra conseguir acesso, tive problemas com o cadastro e depois ainda tive dificuldades pra acompanhar as aulas. Não recomendo.
                </p>
              </div>
            </div>

            <div className="comentario">
              <div className="comentario-content">
                <div className="comentario-usuario">
                  <img className="comentario-usuario-icon" />
                  <div className="comentario-usuario-titulo">
                    <h3>Amanda Vieira</h3>
                    <h4>Cursa - Nebulosa</h4>
                  </div>
                </div>
                <div className="comentario-avaliacao">
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                </div>
                <p className="comentario-conteudo">
                  Alguns professores explicam bem, outros nem tanto. Queria uma padronização maior e talvez legendas nos vídeos. Pelo menos o fórum me ajudou algumas vezes.
                </p>
              </div>
            </div>

            <div className="comentario">
              <div className="comentario-content">
                <div className="comentario-usuario">
                  <img className="comentario-usuario-icon" />
                  <div className="comentario-usuario-titulo">
                    <h3>Gustavo Lima</h3>
                    <h4>Cursa - Nuvem</h4>
                  </div>
                </div>
                <div className="comentario-avaliacao">
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                </div>
                <p className="comentario-conteudo">
                  Tive uma experiência incrível! Fui bem do zero mesmo, e aos poucos tudo começou a fazer sentido. Achei o equilíbrio entre teoria e prática muito bom. O cronograma é flexível e respeita nosso ritmo. Me motivou até a buscar uma faculdade na área.
                </p>
              </div>
            </div>

            <div className="comentario">
              <div className="comentario-content">
                <div className="comentario-usuario">
                  <img className="comentario-usuario-icon" />
                  <div className="comentario-usuario-titulo">
                    <h3>Vitor Matos</h3>
                    <h4>Cursa - Poeira</h4>
                  </div>
                </div>
                <div className="comentario-avaliacao">
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                </div>
                <p className="comentario-conteudo">
                  As aulas são claras e têm bom ritmo. Os PDFs complementares foram essenciais pra mim, pois gosto de ler também. O suporte é bom, mas podia ser 24h, rs. No geral, recomendo bastante!
                </p>
              </div>
            </div>

            <div className="comentario">
              <div className="comentario-content">
                <div className="comentario-usuario">
                  <img className="comentario-usuario-icon" />
                  <div className="comentario-usuario-titulo">
                    <h3>Jéssica Freitas</h3>
                    <h4>Cursa - Nebulosa</h4>
                  </div>
                </div>
                <div className="comentario-avaliacao">
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                </div>
                <p className="comentario-conteudo">
                  Alguns vídeos são bons, outros são só leitura de slides. Falta padrão.
                </p>
              </div>
            </div>

            <div className="comentario">
              <div className="comentario-content">
                <div className="comentario-usuario">
                  <img className="comentario-usuario-icon" />
                  <div className="comentario-usuario-titulo">
                    <h3>Lucas Azevedo</h3>
                    <h4>Cursa - Nuvem</h4>
                  </div>
                </div>
                <div className="comentario-avaliacao">
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                </div>
                <p className="comentario-conteudo">
                  O conteúdo é bom, mas a parte técnica podia melhorar, tipo áudio e edição.
                </p>
              </div>
            </div>
          </div>
          
          <div className="nav-comentarios">
            <div className="comentario">
              <div className="comentario-content">
                <div className="comentario-usuario">
                  <img className="comentario-usuario-icon" />
                  <div className="comentario-usuario-titulo">
                    <h3>Sofia Neves</h3>
                    <h4>Cursa - Poeira</h4>
                  </div>
                </div>
                <div className="comentario-avaliacao">
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                </div>
                <p className="comentario-conteudo">
                  Tem pontos positivos, mas poderia ter mais exercícios e desafios.
                </p>
              </div>
            </div>

            <div className="comentario">
              <div className="comentario-content">
                <div className="comentario-usuario">
                  <img className="comentario-usuario-icon" />
                  <div className="comentario-usuario-titulo">
                    <h3>Carlos Mendes</h3>
                    <h4>Cursa - Nebulosa</h4>
                  </div>
                </div>
                <div className="comentario-avaliacao">
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                </div>
                <p className="comentario-conteudo">
                  Muito bom! As explicações são claras e os exemplos ajudam bastante.
                </p>
              </div>
            </div>

            <div className="comentario">
              <div className="comentario-content">
                <div className="comentario-usuario">
                  <img className="comentario-usuario-icon" />
                  <div className="comentario-usuario-titulo">
                    <h3>Bruno Martins</h3>
                    <h4>Cursa - Nuvem</h4>
                  </div>
                </div>
                <div className="comentario-avaliacao">
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                </div>
                <p className="comentario-conteudo">
                  O conteúdo é bom, mas falta mais interatividade. Tem muito vídeo, mas poucos desafios ou testes práticos. Acho que pra fixar mesmo, seria legal ter simulações ou experimentos.
                </p>
              </div>
            </div>

            <div className="comentario">
              <div className="comentario-content">
                <div className="comentario-usuario">
                  <img className="comentario-usuario-icon" />
                  <div className="comentario-usuario-titulo">
                    <h3>Elisa Faria</h3>
                    <h4>Cursa - Poeira</h4>
                  </div>
                </div>
                <div className="comentario-avaliacao">
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                </div>
                <p className="comentario-conteudo">
                  Comecei empolgada, e o curso me ajudou com os fundamentos, mas achei que os módulos mais avançados não aprofundaram tanto quanto eu esperava. Fica a sugestão de expandir esses temas.
                </p>
              </div>
            </div>

            <div className="comentario">
              <div className="comentario-content">
                <div className="comentario-usuario">
                  <img className="comentario-usuario-icon" />
                  <div className="comentario-usuario-titulo">
                    <h3>Eduardo Campos</h3>
                    <h4>Cursa - Nebulosa</h4>
                  </div>
                </div>
                <div className="comentario-avaliacao">
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                </div>
                <p className="comentario-conteudo">
                  Achei o curso muito bonito na apresentação, mas na prática senti falta de aprofundamento. As aulas são curtas demais em alguns pontos e repetem informações. Não me senti desafiado.
                </p>
              </div>
            </div>

            <div className="comentario">
              <div className="comentario-content">
                <div className="comentario-usuario">
                  <img className="comentario-usuario-icon" />
                  <div className="comentario-usuario-titulo">
                    <h3>Isabela Rocha</h3>
                    <h4>Cursa - Nuvem</h4>
                  </div>
                </div>
                <div className="comentario-avaliacao">
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                </div>
                <p className="comentario-conteudo">
                  A proposta do curso é excelente e realmente funciona. Só não dei 5 estrelas porque acho que poderia ter mais aulas ao vivo ou lives de interação. No mais, estou aprendendo muito e me sinto muito mais confiante com temas de física.
                </p>
              </div>
            </div>

            <div className="comentario">
              <div className="comentario-content">
                <div className="comentario-usuario">
                  <img className="comentario-usuario-icon" />
                  <div className="comentario-usuario-titulo">
                    <h3>Marina Silva</h3>
                    <h4>Cursa - Poeira</h4>
                  </div>
                </div>
                <div className="comentario-avaliacao">
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                </div>
                <p className="comentario-conteudo">
                  Fiz o curso do início ao fim e não tenho palavras! As aulas são envolventes, os professores têm uma didática excelente e o conteúdo é riquíssimo. Comecei sem saber nada sobre astronomia e hoje estou participando de uma olimpíada científica da área. O PDF complementar ajuda muito quando quero revisar longe do computador. Recomendo de olhos fechados!
                </p>
              </div>
            </div>

            <div className="comentario">
              <div className="comentario-content">
                <div className="comentario-usuario">
                  <img className="comentario-usuario-icon" />
                  <div className="comentario-usuario-titulo">
                    <h3>Renata Barbosa</h3>
                    <h4>Cursa - Nebulosa</h4>
                  </div>
                </div>
                <div className="comentario-avaliacao">
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                </div>
                <p className="comentario-conteudo">
                  Não gostei. Achei o curso muito teórico e mal organizado. Entrei achando que ia aprender com atividades práticas, mas foi só vídeo e leitura.
                </p>
              </div>
            </div>

            <div className="comentario">
              <div className="comentario-content">
                <div className="comentario-usuario">
                  <img className="comentario-usuario-icon" />
                  <div className="comentario-usuario-titulo">
                    <h3>João Pedro</h3>
                    <h4>Cursa - Nuvem</h4>
                  </div>
                </div>
                <div className="comentario-avaliacao">
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                </div>
                <p className="comentario-conteudo">
                  Comecei sem grandes expectativas e acabei me apaixonando. As explicações são claras e bem organizadas. Gosto de poder assistir no meu tempo e rever as aulas. O fórum também foi essencial, os professores respondem com atenção. Já indiquei pra vários amigos.
                </p>
              </div>
            </div>
          </div>

          <div className="nav-comentarios">
            <div className="comentario">
              <div className="comentario-content">
                <div className="comentario-usuario">
                  <img className="comentario-usuario-icon" />
                  <div className="comentario-usuario-titulo">
                    <h3>Lucas Azevedo</h3>
                    <h4>Cursa - Nebulosa</h4>
                  </div>
                </div>
                <div className="comentario-avaliacao">
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                </div>
                <p className="comentario-conteudo">
                  O curso é legal, mas tem alguns problemas técnicos. O áudio de algumas aulas está mais baixo e tive que usar fone. Fora isso, o conteúdo está bem explicado e dá pra aprender bastante.
                </p>
              </div>
            </div>

            <div className="comentario">
              <div className="comentario-content">
                <div className="comentario-usuario">
                  <img className="comentario-usuario-icon" />
                  <div className="comentario-usuario-titulo">
                    <h3>Rafael Torres</h3>
                    <h4>Cursa - Nuvem</h4>
                  </div>
                </div>
                <div className="comentario-avaliacao">
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                </div>
                <p className="comentario-conteudo">
                  Vale cada centavo. Fiquei impressionado com a didática e a forma como assuntos complexos são tratados. Só acho que o layout da plataforma poderia ser um pouco mais moderno, mas o conteúdo em si é top!
                </p>
              </div>
            </div>

            <div className="comentario">
              <div className="comentario-content">
                <div className="comentario-usuario">
                  <img className="comentario-usuario-icon" />
                  <div className="comentario-usuario-titulo">
                    <h3>Camila Duarte</h3>
                    <h4>Cursa - Nebulosa</h4>
                  </div>
                </div>
                <div className="comentario-avaliacao">
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                </div>
                <p className="comentario-conteudo">
                  É bom pra quem está começando, mas pra quem já leu sobre astronomia antes, vai achar meio básico. Mesmo assim, tem um valor educativo e pode ser uma boa introdução.
                </p>
              </div>
            </div>

            <div className="comentario">
              <div className="comentario-content">
                <div className="comentario-usuario">
                  <img className="comentario-usuario-icon" />
                  <div className="comentario-usuario-titulo">
                    <h3>Carolina Soares</h3>
                    <h4>Cursa - Poeira</h4>
                  </div>
                </div>
                <div className="comentario-avaliacao">
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                </div>
                <p className="comentario-conteudo">
                  Demorei pra conseguir acesso, tive problemas com o cadastro e depois ainda tive dificuldades pra acompanhar as aulas. Não recomendo.
                </p>
              </div>
            </div>

            <div className="comentario">
              <div className="comentario-content">
                <div className="comentario-usuario">
                  <img className="comentario-usuario-icon" />
                  <div className="comentario-usuario-titulo">
                    <h3>Amanda Vieira</h3>
                    <h4>Cursa - Nebulosa</h4>
                  </div>
                </div>
                <div className="comentario-avaliacao">
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                </div>
                <p className="comentario-conteudo">
                  Alguns professores explicam bem, outros nem tanto. Queria uma padronização maior e talvez legendas nos vídeos. Pelo menos o fórum me ajudou algumas vezes.
                </p>
              </div>
            </div>

            <div className="comentario">
              <div className="comentario-content">
                <div className="comentario-usuario">
                  <img className="comentario-usuario-icon" />
                  <div className="comentario-usuario-titulo">
                    <h3>Gustavo Lima</h3>
                    <h4>Cursa - Nuvem</h4>
                  </div>
                </div>
                <div className="comentario-avaliacao">
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                </div>
                <p className="comentario-conteudo">
                  Tive uma experiência incrível! Fui bem do zero mesmo, e aos poucos tudo começou a fazer sentido. Achei o equilíbrio entre teoria e prática muito bom. O cronograma é flexível e respeita nosso ritmo. Me motivou até a buscar uma faculdade na área.
                </p>
              </div>
            </div>

            <div className="comentario">
              <div className="comentario-content">
                <div className="comentario-usuario">
                  <img className="comentario-usuario-icon" />
                  <div className="comentario-usuario-titulo">
                    <h3>Vitor Matos</h3>
                    <h4>Cursa - Poeira</h4>
                  </div>
                </div>
                <div className="comentario-avaliacao">
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                </div>
                <p className="comentario-conteudo">
                  As aulas são claras e têm bom ritmo. Os PDFs complementares foram essenciais pra mim, pois gosto de ler também. O suporte é bom, mas podia ser 24h, rs. No geral, recomendo bastante!
                </p>
              </div>
            </div>

            <div className="comentario">
              <div className="comentario-content">
                <div className="comentario-usuario">
                  <img className="comentario-usuario-icon" />
                  <div className="comentario-usuario-titulo">
                    <h3>Jéssica Freitas</h3>
                    <h4>Cursa - Nebulosa</h4>
                  </div>
                </div>
                <div className="comentario-avaliacao">
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                </div>
                <p className="comentario-conteudo">
                  Alguns vídeos são bons, outros são só leitura de slides. Falta padrão.
                </p>
              </div>
            </div>

            <div className="comentario">
              <div className="comentario-content">
                <div className="comentario-usuario">
                  <img className="comentario-usuario-icon" />
                  <div className="comentario-usuario-titulo">
                    <h3>Lucas Azevedo</h3>
                    <h4>Cursa - Nuvem</h4>
                  </div>
                </div>
                <div className="comentario-avaliacao">
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-clara.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                  <img src="./src/assets/estrela-escura.svg" />
                </div>
                <p className="comentario-conteudo">
                  O conteúdo é bom, mas a parte técnica podia melhorar, tipo áudio e edição.
                </p>
              </div>
            </div>
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
