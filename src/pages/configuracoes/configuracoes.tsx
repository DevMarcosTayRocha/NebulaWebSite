import { Menu } from "../../components/Menu"
import "./configuracoes.css"
import { useState } from "react"



function Configuracoes() {

  const [idioma, setIdioma] = useState(false)
  const [tema, setTema] = useState(false)

  return (
    <>

      <Menu />
      <div id="container-config">
        <h1>Trocar Idioma</h1>
        <p>Escolha o idioma que melhor te ajude a navegar pelo nosso site.</p>
        <div className="botoes">
          <div className="btn" style={{ backgroundColor: idioma ? "#9A30EB" : "#282828"}} onClick={() => {setIdioma(true)}}>
            PORTUGUES (BRASIL)
          </div>
          <div className="btn" style={{ backgroundColor: !idioma ? "#9A30EB" : "#282828"}} onClick={() => {setIdioma(false)}}>
            ENGLISH (US)
          </div>
        </div>
        <h1>Trocar Tema</h1>
        <p>Escolha o tema que melhor te ajude a navegar pelo nosso site.</p>
        <div className="botoes">
          <div className="btn" style={{ backgroundColor: tema ? "#9A30EB" : "#282828"}} onClick={() => {setTema(true)}}>
            TEMA ESCURO
          </div>
          <div className="btn" style={{ backgroundColor: !tema ? "#9A30EB" : "#282828"}} onClick={() => {setTema(false)}}>
            TEMA CLARO
          </div>
        </div>
        <h1>Trocar Conta ou Sair</h1>
        <p>Voce pode trocar o seu usuario ou sair</p>
        <div className="btn">
          TROCAR USUARIO
        </div>
        <div className="btn">
          SAIR
        </div>

      </div>

    </>
  )
}

export default Configuracoes
