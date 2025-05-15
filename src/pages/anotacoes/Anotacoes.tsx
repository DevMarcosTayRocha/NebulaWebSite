import { Menu } from "../../components/Menu";
import "./Anotacoes.css"
import BotaoAdicionar from "./components/botaoAdicionar";
import TodoApp from "./components/teste";

function Anotacoes() {
    return (
        <>
            <Menu />
            <div id="container">
                <div className="ant-container">
                    <div className="ant-container-part part1">
                        <div className="ant-container-anotacoes"></div>
                        <BotaoAdicionar />
                    </div>
                    <div className="ant-container-part part2">
                        <div className="ant-container-anotacoes"></div>
                        <BotaoAdicionar />
                    </div>
                    <div className="ant-container-part part3">
                        <div className="ant-container-anotacoes"></div>
                        <BotaoAdicionar />
                    </div>
                </div>
                <TodoApp/>
            </div>
        </>
    )
}

export default Anotacoes;