import "./main_404.css"
import { Link } from 'react-router-dom'

export function Main() {
    return(
        <>
            <div id="main">
            <div id="msg">Pagina não encontrada</div>
            <div id="error">
                <div id="f1">4</div>
                <div id="circle">
                    <div id="smalldot"></div>
                </div>
                <div id="f2">4</div>
            </div>
            
            <div id="info"> Não conseguimos encontrar a página que você está procurando.</div>
            
            <Link to="/">
            <div id="btn">Voltar ao Site</div>
            </Link>
        </div>  
        </>
    )
}