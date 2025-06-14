import { Menu } from "../../components/Menu"
import Footer from "../../components/footer"
import { TemplateModulos } from './components/templateModulos'
import './cursos.css'

function Cursos() {
  return (
    <>
      <Menu />
      <div id="container">
        <div className="cursos-espacamento">
          <div className="cursos-div-titulo">
            <h1>CURSO UNIVERSO</h1>
            <hr />
          </div>
          <div className="cursos-alinhar-tamplates">
            <TemplateModulos assinatura='universo' />
          </div>

          <div className="cursos-div-titulo">
            <h1>CURSO GALÁXIA</h1>
            <hr />
          </div>
          <TemplateModulos assinatura='galaxia' />

          <div className="cursos-div-titulo">
            <h1>CURSO ÓRBITA</h1>
            <hr />
          </div>
          <TemplateModulos assinatura='orbita' />

        </div>
        <Footer />
      </div>
    </>
  );
}

export default Cursos;
