import { useParams } from 'react-router-dom'
import { Menu } from "../../components/Menu"
import Footer from "../../components/footer"
import { initial_cursos } from './components/cursosDados'

function ModuloPage() {
  const { assinatura, moduloId } = useParams<{ assinatura: string; moduloId: string }>()

  const curso = initial_cursos[assinatura ?? '']
  const modulo = curso?.find((mod) => mod.id === Number(moduloId))

  if (!modulo) {
    return <div>Módulo não encontrado.</div>
  }

  console.log(modulo)
  
  return (
    <>
      <Menu />
      <div id="container">
        <div className="cursos-espacamento">

          <div className="sessao">
            <h1>INTRODUÇÂO</h1>
            <hr />
          </div>
          <p>{modulo.introducao.descricao}</p>
          <div className='cursos-video-sessao'>
            <div style={{ backgroundImage: `url(${modulo.introducao.videoBackground})` }}>
            </div>
            <img src="/arrow-video.png" alt="" />
          </div>
          <div className="curso-download">Baixar PDF</div>
          <div className="sessao">
            <h1>ATIVIDADES</h1>
            <hr />
          </div>
            <hr />
          <div className="sessao">
            <div className="atividades-sessao-arrow-left"></div>
            <div className="atividades-sessao-container">
              
            </div>
            <div className="atividades-sessao-arrow-rigth"></div>
          </div>
            <hr />

        </div>
        <Footer />
      </div>
    </>
  )
}

export default ModuloPage