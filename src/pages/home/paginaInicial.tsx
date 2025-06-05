import { Menu } from "../../components/Menu";
import Banner from "./components/banner";
import Objetivos from "./components/objetivos";
import Apresentacao from "./components/apresentacao";
import CarrosselAulas from "./components/carrosselAulas";
import Avaliacoes from "./components/avaliacoes";
import SessaoPlanos from "./components/sessaoPlanos";
import Footer from "../../components/footer";
import "./paginaInicial.css";

function Home() {

    return (
        <>
            <Menu />

            <div id="container">

                <Banner />
                <Objetivos />
                <Apresentacao />
                <CarrosselAulas />
                <Avaliacoes />
                <SessaoPlanos/>
                <footer>
                <Footer/>
                </footer>
                

            </div>
        </>
    )
}

export default Home;