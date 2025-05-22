import "./Comentario.css"
import { Respostas } from "./respostas"

interface comentarioProps {
    fotoPerfil: string;
    nomeUsuario: string;
    dataHora: string;
    temaPergunta: string;
    conteudoComentario: string;
    numeroAvaliacao: string;
    avaliacaoDoUsuario: string;
    idComentario: Number;
    arrayRespostas: ArrayBuffer;
}

export function Comentario({ fotoPerfil, nomeUsuario, dataHora, temaPergunta, conteudoComentario, numeroAvaliacao, avaliacaoDoUsuario, idComentario, arrayRespostas }: comentarioProps) {
    let idComentarioCopy = idComentario
    setTimeout(() => {
        let contagem = false
        document.getElementById(`verRespotas${idComentarioCopy}`).onclick = () => {
            if (contagem) {
                document.getElementById(`frm-comentario${idComentarioCopy}`).style.cssText += 'border-radius: 10px;'
                document.getElementById(`respotasForm${idComentarioCopy}`).style.cssText += 'height: 0;'
                document.getElementById(`respotasContainer${idComentarioCopy}`).style.cssText += 'height: 0;opacity: 0;'
            } else {
                document.getElementById(`frm-comentario${idComentarioCopy}`).style.cssText += 'border-radius: 0;'
                document.getElementById(`respotasForm${idComentarioCopy}`).style.cssText += 'height: 200px;'
                document.getElementById(`respotasContainer${idComentarioCopy}`).style.cssText += 'height: auto;opacity: 1;'
            }
            contagem = !contagem
        }
        // document.getElementById(`enviarRespotas${idComentarioCopy}`).onclick = () => {
        //     document.getElementById(`respotasContainer${idComentarioCopy}`).innerHTML += document.getElementById(`escreverResposta${idComentarioCopy}`).value
        // }
    }, 50)

    return (
        <>
            <div>
                <div className="frm-comentario" id={`frm-comentario${idComentarioCopy}`}>
                    <div className="frm-comentario-lateral-esquerda">
                        <img src={fotoPerfil} alt="" />
                        <div>
                            <img src="../../../src/assets/setaDeAvaliacao.svg" alt="" />
                            <p>{numeroAvaliacao}</p>
                        </div>
                        <nav className={avaliacaoDoUsuario}>
                            <img src="../../../src/assets/pencil.svg" alt="" />
                            <img src="../../../src/assets/delete.svg" alt="" />
                        </nav>
                    </div>
                    <div className="frm-comentario-lateral-direita">
                        <div className="frm-comentario-titulo">
                            <h3>{temaPergunta}</h3>
                            <h4>Publicado por {nomeUsuario} faz {dataHora}</h4>
                        </div>
                        <p className="frm-comentario-conteudo">
                            {conteudoComentario}
                        </p>
                        <div className="frm-comentario-baixo">
                            <button id={`verRespotas${idComentarioCopy}`}>Ver respostas.</button>
                            <div>{arrayRespostas.length} respostas</div>
                        </div>
                    </div>
                </div>
                <div className="frm-comentario-ver-respostas">
                    <div className="ver-respostas-form-esconder" id={`respotasForm${idComentarioCopy}`}>
                        <div className="ver-respostas-form">
                            <input type="text" placeholder="Digite sua resposta aqui" id={`escreverRespotas${idComentarioCopy}`} />
                            <button id={`enviarRespotas${idComentarioCopy}`}>
                                <img src="../../../src/assets/submit.svg" alt="enviar" />
                            </button>
                        </div>
                    </div>
                    <div className="ver-respostas-container" id={`respotasContainer${idComentarioCopy}`}>
                        {
                            Array.from({ length: arrayRespostas.length }, (_, i) => (
                                <Respostas rfotoPerfil={arrayRespostas[i][0]} rnomeUsuario={arrayRespostas[i][1]} rdataHora={arrayRespostas[i][2]} rconteudoComentario={arrayRespostas[i][3]}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}