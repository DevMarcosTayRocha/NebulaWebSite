import "./Comentario.css"
import { Respostas } from "./respostas"
import { comentarios } from "./comentariosDados"
import { useState } from "react"


export function Comentario() {
    const htmlComentarios = comentarios.map(comentario => {
        const [resposta, setResposta] = useState('')
        const [comteudoEditado, setComteudoEditado] = useState('')
        const [ativo, setAtivo] = useState(false)
        const [editar, setEditar] = useState(false)
        const estiloComentario = {
          borderRadius: ativo ? '10px 10px 0px 0px' : '10px 10px 10px 10px'
        }
        const estiloFormulario = {
          height: ativo ? '300px' : '0px'
        }
        const estiloRespostas = {
          height: ativo ? 'auto' : '0px',
          opacity: ativo ? 1 : 0
        }

        return (
            <div key={`frm-comentario${comentario.idComentario}`}>
                <div className="frm-comentario" style={estiloComentario}>
                    <div className="frm-comentario-lateral-esquerda">
                        <div className="frm-comentario-foto-perfil" style={{backgroundImage: `url(${comentario.fotoPerfil})`}}></div>
                        <div>
                            <img src="../../../src/assets/setaDeAvaliacao.svg" alt="" />
                            <p>{comentario.numeroAvaliacao}</p>
                        </div>
                        <nav className={comentario.avaliacaoDoUsuario}>
                            <img src="../../../src/assets/pencil.svg" alt="" onClick={() => {
                                if (editar) {
                                    if (comteudoEditado.trim() !== '') {
                                        comentario.conteudoComentario = comteudoEditado
                                        setEditar(false)
                                    }
                                } else {
                                    setComteudoEditado(comentario.conteudoComentario)
                                    setEditar(true)
                                }
                            }} />
                            <img src="../../../src/assets/delete.svg" alt="" onClick={() => {
                                for (let i = 0; i < comentarios.length; i++) {
                                    if (comentarios[i] = comentario) {
                                        comentarios.splice(i, 1)
                                    }
                                }
                            }} />
                        </nav>
                    </div>
                    <div className="frm-comentario-lateral-direita">
                        <div className="frm-comentario-titulo">
                            <h3>{comentario.temaPergunta}</h3>
                            <h4>Publicado por {comentario.nomeUsuario} faz {comentario.dataHora}</h4>
                        </div>
                        <p className="frm-comentario-conteudo" style={{display: editar ? 'none' : 'block'}}>
                            {comentario.conteudoComentario}
                        </p>
                        
                        <p className="frm-comentario-conteudo-editar" style={{display: !editar ? 'none' : 'block'}}>
                            <textarea maxLength={2000} value={comteudoEditado} className="frm-comentario-conteudo-editar-input" style={{display: !editar ? 'none' : 'block'}}
                                onChange={e => setComteudoEditado(e.target.value)}
                                onKeyDown={e => {
                                    if (e.key === 'Enter') {
                                        if (e.shiftKey) {
                                            return
                                        } else {
                                            if (comteudoEditado.trim() !== '') {
                                                comentario.conteudoComentario = comteudoEditado
                                                setEditar(false)
                                            }
                                        }
                                    }
                                }}
                            />
                        </p>
                        <div className="frm-comentario-baixo">
                            <button onClick={() => {
                                comentario.contagem = !comentario.contagem
                                setAtivo(comentario.contagem)
                            }}>Ver respostas.</button>
                            <div>{comentario.arrayRespostas.length} respostas</div>
                        </div>
                    </div>
                </div>
                <div className="frm-comentario-ver-respostas">
                    <div className="ver-respostas-form-esconder" style={estiloFormulario}>
                        <div className="ver-respostas-form">
                            <textarea value={resposta} maxLength={400} placeholder="Digite sua resposta aqui" 
                                onChange={e => setResposta(e.target.value)}
                                onKeyDown={e => {
                                    setTimeout(() => {
                                        if (e.key === 'Enter') {
                                            if (e.shiftKey) {
                                                return
                                            } else {
                                                if (resposta.trim() !== '') {
                                                    comentario.arrayRespostas.push({
                                                        idResposta: comentario.arrayRespostas.length+1,
                                                        rfotoPerfil: "../../../src/assets/icones-usuarios/kurbie.jpg",
                                                        rnomeUsuario: "Luiz",
                                                        rdataHora: new Date().toLocaleString(),
                                                        rconteudoComentario: resposta
                                                    })
                                                    setResposta('')
                                                }
                                            }
                                        }
                                    }, 10)
                                }}
                            />
                            <button id={`enviarRespotas${comentario.idComentario}`} onClick={() => {
                                if (resposta.length > 0) {
                                    comentario.arrayRespostas.push({
                                        idResposta: comentario.arrayRespostas.length+1,
                                        rfotoPerfil: "../../../src/assets/icones-usuarios/kurbie.jpg",
                                        rnomeUsuario: "Luiz",
                                        rdataHora: new Date().toLocaleString(),
                                        rconteudoComentario: resposta
                                    })
                                    setResposta('')
                                }
                            }}>
                                <img src="../../../src/assets/submit.svg" alt="enviar" />
                            </button>
                        </div>
                    </div>
                    <div className="ver-respostas-container" style={estiloRespostas}>
                        {
                            comentario.arrayRespostas.map(resposta => {
                                return (
                                    <Respostas key={`resposta${comentario.idComentario}000${resposta.idResposta}`} rfotoPerfil={resposta.rfotoPerfil} rnomeUsuario={resposta.rnomeUsuario} rdataHora={resposta.rdataHora} rconteudoComentario={resposta.rconteudoComentario}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    })

    return (
        <>
            {htmlComentarios}
        </>
    )
}