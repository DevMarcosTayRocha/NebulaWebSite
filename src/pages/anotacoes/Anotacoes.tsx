import Footer from "../../components/footer";
import { Menu } from "../../components/Menu";
import "./Anotacoes.css"
import BotaoAdicionar from "./components/botaoAdicionar";

function Anotacoes() {

    return (
        <>
            <Menu />
            <div id="container">
                <div className="ant-container" style={{minHeight: "100vh"}}>
                    <div className="ant-container-part part1">
                        <BotaoAdicionar />
                    </div>
                    <div className="ant-container-part part2">
                        <BotaoAdicionar />
                    </div>
                    <div className="ant-container-part part3">
                        <BotaoAdicionar />
                    </div>
                    <div className="ant-container-part part3">
                        <BotaoAdicionar />
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Anotacoes;