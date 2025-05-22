import "./sessaoPlanos.css"
import "../../../index.css"

function SessaoPlanos() {
    return (
        <>
            <div id="ssp-container">
                <div className="pdr-descricao">
                    <span>Conheça os nossos <span className="pdr-descricao-destaque">PLANOS</span></span>
                </div>

                <div className="video-planos">
                    <div>
                        <div className="video-planos-background"></div>
                        <img alt="Iniciar video sobre planos" src="./src/assets/play.svg" />
                    </div>
                </div>
                <div className="planos-mini-texto">
                    <span>
                        Após assistir o vídeo acima e entender como os nossos cursos funcionam, agora você poderá escolher qual o melhor plano para você.
                </span>
                    </div>
                <div className="container-planos">
                    <div className="plano">
                        <img src="./src/assets/background-padrao.webp" />
                        <h2>ÓRBITA</h2>
                        <p>"I'll get Dumbledore if you let go of me," said Harry. "Just let go, Mr. Crouch, and I'll get him.. . ."</p>
                        <h3>A PARTIR DE</h3>
                        <div className="plano-button">R$900.99</div>
                        <div className="plano-nav-beneficios">
                            <div className="nav-beneficio"><p>Beneficio 1</p> <img src="./src/assets/check-claro.svg" /></div>
                            <div className="nav-beneficio"><p>Beneficio 2</p> <img src="./src/assets/check-claro.svg" /></div>
                            <div className="nav-beneficio"><p>Beneficio 3</p> <img src="./src/assets/check-escuro.svg" /></div>
                            <div className="nav-beneficio"><p>Beneficio 4</p> <img src="./src/assets/check-escuro.svg" /></div>
                            <div className="nav-beneficio"><p>Beneficio 5</p> <img src="./src/assets/check-escuro.svg" /></div>
                        </div>
                    </div>
                    <div className="plano">
                        <img src="./src/assets/background-padrao.webp" />
                        <h2>GALÁXIA</h2>
                        <p>"I'll get Dumbledore if you let go of me," said Harry. "Just let go, Mr. Crouch, and I'll get him.. . ."</p>
                        <h3>A PARTIR DE</h3>
                        <div className="plano-button">R$990.99</div>
                        <div className="plano-nav-beneficios">
                            <div className="nav-beneficio"><p>Beneficio 1</p> <img src="./src/assets/check-claro.svg" /></div>
                            <div className="nav-beneficio"><p>Beneficio 2</p> <img src="./src/assets/check-claro.svg" /></div>
                            <div className="nav-beneficio"><p>Beneficio 3</p> <img src="./src/assets/check-claro.svg" /></div>
                            <div className="nav-beneficio"><p>Beneficio 4</p> <img src="./src/assets/check-escuro.svg" /></div>
                            <div className="nav-beneficio"><p>Beneficio 5</p> <img src="./src/assets/check-escuro.svg" /></div>
                        </div>
                    </div>
                    <div className="plano plano-universo">
                        <img src="./src/assets/background-padrao.webp" />
                        <h2>UNIVERSO</h2>
                        <p>"I'll get Dumbledore if you let go of me," said Harry. "Just let go, Mr. Crouch, and I'll get him.. . ."</p>
                        <h3>A PARTIR DE</h3>
                        <div className="plano-button">R$999.99</div>
                        <div className="plano-nav-beneficios">
                            <div className="nav-beneficio"><p>Beneficio 1</p> <img src="./src/assets/check-claro2.svg" /></div>
                            <div className="nav-beneficio"><p>Beneficio 2</p> <img src="./src/assets/check-claro2.svg" /></div>
                            <div className="nav-beneficio"><p>Beneficio 3</p> <img src="./src/assets/check-claro2.svg" /></div>
                            <div className="nav-beneficio"><p>Beneficio 4</p> <img src="./src/assets/check-claro2.svg" /></div>
                            <div className="nav-beneficio"><p>Beneficio 5</p> <img src="./src/assets/check-claro2.svg" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SessaoPlanos;