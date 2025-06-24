import { useParams } from 'react-router-dom'
import { Menu } from "../../components/Menu"
import Footer from "../../components/footer"
import { initial_cursos } from './components/cursosDados'
import { useRef, useState, useEffect } from 'react'
import { VideoCard } from './videos'

function ModuloPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const { assinatura, moduloId } = useParams<{ assinatura: string; moduloId: string }>()

  useEffect(() => {
    const handleFullscreenChange = () => {
      const video = videoRef.current
      const isFull = document.fullscreenElement === video
      setIsFullscreen(isFull)
  
      if (!isFull && video) {
        video.pause()
      }
    }
  
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
    }
  }, [])

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
            <VideoCard
              src="/cursos/mod1-intro.mp4"
              backgroundImage={modulo.introducao.videoBackground}
              width="100%"
              height="300px"
              showPlayIcon={true}
            />

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