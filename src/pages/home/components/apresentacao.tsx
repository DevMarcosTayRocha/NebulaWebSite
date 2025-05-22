import "./apresentacao.css"
import { Link } from "react-router-dom";

function Apresentacao() {
    return(
        <>
            <div className="apr-container">
                <div className="pdr-descricao"><span>Comtemple o nossos conteudos <span className="pdr-descricao-destaque">EXCLUSIVOS</span></span></div>

                <div className="apr-cards">
                    <div className="apr-card">
                        <div className="apr-descricao-card">
                            <div className="apr-titulo-card">TITULO</div>
                            <div className="apr-texto-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ex atque ut debitis cupiditate explicabo deleniti aspernatur commodi similique tempore nostrum ipsam id eos sit, dolores veniam! Facilis, quia sed!</div>
                        </div>
                        <div className="apr-imagem-card" style={{backgroundImage:"url(../src/assets/ImagemCardAulas.png)"}}></div>
                    </div>
                    <div className="apr-card">
                        <div className="apr-descricao-card">
                            <div className="apr-titulo-card">TITULO</div>
                            <div className="apr-texto-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ex atque ut debitis cupiditate explicabo deleniti aspernatur commodi similique tempore nostrum ipsam id eos sit, dolores veniam! Facilis, quia sed!</div>
                        </div>
                        <div className="apr-imagem-card" style={{backgroundImage:"url(../src/assets/ImagemCardTarefas.png)"}}></div>
                    </div>
                    <div className="apr-card">
                        <div className="apr-descricao-card">
                            <div className="apr-titulo-card">TITULO</div>
                            <div className="apr-texto-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ex atque ut debitis cupiditate explicabo deleniti aspernatur commodi similique tempore nostrum ipsam id eos sit, dolores veniam! Facilis, quia sed!</div>
                        </div>
                        <div className="apr-imagem-card" style={{backgroundImage:"url(../src/assets/ImagemCardAvaliacoes.png)"}}></div>
                    </div>
                    <div className="apr-card">
                        <div className="apr-descricao-card">
                            <div className="apr-titulo-card">TITULO</div>
                            <div className="apr-texto-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ex atque ut debitis cupiditate explicabo deleniti aspernatur commodi similique tempore nostrum ipsam id eos sit, dolores veniam! Facilis, quia sed!</div>
                            <Link to="cadastrar" className="apr-botao-card"><span>CADASTRAR</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Apresentacao;