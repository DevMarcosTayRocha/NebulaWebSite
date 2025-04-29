import { Menu } from "../../components/Menu";
import Banner from "./components/banner";
import Objetivos from "./components/objetivos";
import Apresentacao from "./components/apresentacao";
import CarrosselAulas from "./components/carrosselAulas";

import "./css/style.css"
import { useState } from "react";

    function Home() {

        const [abreFechaFiltrosTrue, setAbreFechaFiltrosTrue] = useState(true)
    const [containerHeight, setContainerHeight] = useState(1000)

    const maisAvaliacoes = () => {
        if (containerHeight >= 3000) return
        setContainerHeight(prev => prev + 1000)
    }

    const filtroEstrela = (qualEstrela: number) => {
        for (let i = 1; i <= 5; i++) {
            const estrela = document.getElementById(`estrela-filtro-${i}`)
            if (estrela) {
                estrela.style.filter = i === qualEstrela ? 'grayscale(0%)' : 'grayscale(100%)'
            }
        }
    }

    const abreFechaFiltro = (trueClick: boolean) => {
        const filtrosExtra = document.getElementById('filtros-extra')
        if (!filtrosExtra) return

        if (trueClick) {
            setTimeout(() => {
                if (abreFechaFiltrosTrue) {
                    filtrosExtra.style.width = '250px'
                    filtrosExtra.style.height = 'auto'
                    filtrosExtra.style.padding = '25px'
                } else {
                    filtrosExtra.style.width = '0px'
                    filtrosExtra.style.height = '0px'
                    filtrosExtra.style.padding = '0px'
                }
                setAbreFechaFiltrosTrue(prev => !prev)
            }, 10)
        } else {
            setAbreFechaFiltrosTrue(true)
        }
    }
        return (
            <>
                <Menu />

                <div id="container">

                    <Banner />
                    <Objetivos />
                    <Apresentacao />
                    <CarrosselAulas />

                        <div className="container-avaliações">
                            <div className='container-nav-estrelas'>
                                <nav className="nav-estrelas-demo">
                                    {[1, 2, 3, 4, 5].map(num => (
                                        <div key={num} onClick={() => filtroEstrela(num)}>
                                            <p>{num}</p>
                                            <img
                                                id={`estrela-filtro-${num}`}
                                                src="./assets/estrela-clara.svg"
                                                alt={`Estrela ${num}`}
                                            />
                                        </div>
                                    ))}
                                </nav>
                                <div className="button-filtros" onClick={() => abreFechaFiltro(true)}>
                                    <p>Filtros</p>
                                    <img src='./assets/filtros.svg' />
                                    <div className="button-filtros-div-extra" id="filtros-extra" onClick={() => abreFechaFiltro(false)}>
                                        <div className="filtros-extra-titulo">
                                            <h2>Filtros</h2>
                                            <img src="./assets/close.svg" onClick={() => abreFechaFiltro(true)} />
                                        </div>
                                        <div className="filtros-extra-input">Data</div>
                                        <div className="filtros-extra-input">Curso</div>
                                        <div className="filtros-extra-aplicar">Aplicar</div>
                                    </div>
                                </div>
                            </div>
                            <div className='container-nav-comentarios' id="container-comentarios">
                                <div className="nav-comentarios">

                                    <div className="comentario">
                                        <div className="comentario-content">
                                            <div className="comentario-usuario">
                                                <img className="comentario-usuario-icon" />
                                                <div className="comentario-usuario-titulo">
                                                    <h3>Luzi Henri Moraes</h3>
                                                    <h4>Cursa - Poeira</h4>
                                                </div>
                                            </div>
                                            <div className="comentario-avaliacao">
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                            </div>
                                            <p className="comentario-conteudo">
                                                Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="comentario">
                                        <div className="comentario-content">
                                            <div className="comentario-usuario">
                                                <img className="comentario-usuario-icon" />
                                                <div className="comentario-usuario-titulo">
                                                    <h3>Arthur Poles Grego</h3>
                                                    <h4>Cursa - Nebulosa</h4>
                                                </div>
                                            </div>
                                            <div className="comentario-avaliacao">
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                            </div>
                                            <p className="comentario-conteudo">
                                                Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you been? They're heading in this direction. What are we going to do? We'll be sent to the spice mine of Kessel or smashed into who knows what! Wait a minute, where are you going? The Death Star plans are not in the main computer. Where are those transmissions you intercepted? What have you done with those plans? We intercepted no transmissions. Aaah., This is a consular ship.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="comentario">
                                        <div className="comentario-content">
                                            <div className="comentario-usuario">
                                                <img className="comentario-usuario-icon" />
                                                <div className="comentario-usuario-titulo">
                                                    <h3>LuLuzinha1</h3>
                                                    <h4>Cursa - Nuvem</h4>
                                                </div>
                                            </div>
                                            <div className="comentario-avaliacao">
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                            </div>
                                            <p className="comentario-conteudo">
                                                Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="comentario">
                                        <div className="comentario-content">
                                            <div className="comentario-usuario">
                                                <img className="comentario-usuario-icon" />
                                                <div className="comentario-usuario-titulo">
                                                    <h3>Luzi Henri Moraes</h3>
                                                    <h4>Cursa - Poeira</h4>
                                                </div>
                                            </div>
                                            <div className="comentario-avaliacao">
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                            </div>
                                            <p className="comentario-conteudo">
                                                Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="comentario">
                                        <div className="comentario-content">
                                            <div className="comentario-usuario">
                                                <img className="comentario-usuario-icon" />
                                                <div className="comentario-usuario-titulo">
                                                    <h3>Arthur Poles Grego</h3>
                                                    <h4>Cursa - Nebulosa</h4>
                                                </div>
                                            </div>
                                            <div className="comentario-avaliacao">
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                            </div>
                                            <p className="comentario-conteudo">
                                                Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you been? They're heading in this direction. What are we going to do? We'll be sent to the spice mine of Kessel or smashed into who knows what! Wait a minute, where are you going? The Death Star plans are not in the main computer. Where are those transmissions you intercepted? What have you done with those plans? We intercepted no transmissions. Aaah., This is a consular ship.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="comentario">
                                        <div className="comentario-content">
                                            <div className="comentario-usuario">
                                                <img className="comentario-usuario-icon" />
                                                <div className="comentario-usuario-titulo">
                                                    <h3>LuLuzinha1</h3>
                                                    <h4>Cursa - Nuvem</h4>
                                                </div>
                                            </div>
                                            <div className="comentario-avaliacao">
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                            </div>
                                            <p className="comentario-conteudo">
                                                Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="comentario">
                                        <div className="comentario-content">
                                            <div className="comentario-usuario">
                                                <img className="comentario-usuario-icon" />
                                                <div className="comentario-usuario-titulo">
                                                    <h3>Luzi Henri Moraes</h3>
                                                    <h4>Cursa - Poeira</h4>
                                                </div>
                                            </div>
                                            <div className="comentario-avaliacao">
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                            </div>
                                            <p className="comentario-conteudo">
                                                Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="comentario">
                                        <div className="comentario-content">
                                            <div className="comentario-usuario">
                                                <img className="comentario-usuario-icon" />
                                                <div className="comentario-usuario-titulo">
                                                    <h3>Arthur Poles Grego</h3>
                                                    <h4>Cursa - Nebulosa</h4>
                                                </div>
                                            </div>
                                            <div className="comentario-avaliacao">
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                            </div>
                                            <p className="comentario-conteudo">
                                                Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you been? They're heading in this direction. What are we going to do? We'll be sent to the spice mine of Kessel or smashed into who knows what! Wait a minute, where are you going? The Death Star plans are not in the main computer. Where are those transmissions you intercepted? What have you done with those plans? We intercepted no transmissions. Aaah., This is a consular ship.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="comentario">
                                        <div className="comentario-content">
                                            <div className="comentario-usuario">
                                                <img className="comentario-usuario-icon" />
                                                <div className="comentario-usuario-titulo">
                                                    <h3>LuLuzinha1</h3>
                                                    <h4>Cursa - Nuvem</h4>
                                                </div>
                                            </div>
                                            <div className="comentario-avaliacao">
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                            </div>
                                            <p className="comentario-conteudo">
                                                Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                                <div className="nav-comentarios">

                                    <div className="comentario">
                                        <div className="comentario-content">
                                            <div className="comentario-usuario">
                                                <img className="comentario-usuario-icon" />
                                                <div className="comentario-usuario-titulo">
                                                    <h3>Arthur Poles Grego</h3>
                                                    <h4>Cursa - Nebulosa</h4>
                                                </div>
                                            </div>
                                            <div className="comentario-avaliacao">
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                            </div>
                                            <p className="comentario-conteudo">
                                                Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you been? They're heading in this direction. What are we going to do? We'll be sent to the spice mine of Kessel or smashed into who knows what! Wait a minute, where are you going? The Death Star plans are not in the main computer. Where are those transmissions you intercepted? What have you done with those plans? We intercepted no transmissions. Aaah., This is a consular ship.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="comentario">
                                        <div className="comentario-content">
                                            <div className="comentario-usuario">
                                                <img className="comentario-usuario-icon" />
                                                <div className="comentario-usuario-titulo">
                                                    <h3>LuLuzinha1</h3>
                                                    <h4>Cursa - Nuvem</h4>
                                                </div>
                                            </div>
                                            <div className="comentario-avaliacao">
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                            </div>
                                            <p className="comentario-conteudo">
                                                Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="comentario">
                                        <div className="comentario-content">
                                            <div className="comentario-usuario">
                                                <img className="comentario-usuario-icon" />
                                                <div className="comentario-usuario-titulo">
                                                    <h3>Arthur Poles Grego</h3>
                                                    <h4>Cursa - Nebulosa</h4>
                                                </div>
                                            </div>
                                            <div className="comentario-avaliacao">
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                            </div>
                                            <p className="comentario-conteudo">
                                                Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you been? They're heading in this direction. What are we going to do? We'll be sent to the spice mine of Kessel or smashed into who knows what! Wait a minute, where are you going? The Death Star plans are not in the main computer. Where are those transmissions you intercepted? What have you done with those plans? We intercepted no transmissions. Aaah., This is a consular ship.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="comentario">
                                        <div className="comentario-content">
                                            <div className="comentario-usuario">
                                                <img className="comentario-usuario-icon" />
                                                <div className="comentario-usuario-titulo">
                                                    <h3>Luzi Henri Moraes</h3>
                                                    <h4>Cursa - Poeira</h4>
                                                </div>
                                            </div>
                                            <div className="comentario-avaliacao">
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                            </div>
                                            <p className="comentario-conteudo">
                                                Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="comentario">
                                        <div className="comentario-content">
                                            <div className="comentario-usuario">
                                                <img className="comentario-usuario-icon" />
                                                <div className="comentario-usuario-titulo">
                                                    <h3>Arthur Poles Grego</h3>
                                                    <h4>Cursa - Nebulosa</h4>
                                                </div>
                                            </div>
                                            <div className="comentario-avaliacao">
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                            </div>
                                            <p className="comentario-conteudo">
                                                Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you been? They're heading in this direction. What are we going to do? We'll be sent to the spice mine of Kessel or smashed into who knows what! Wait a minute, where are you going? The Death Star plans are not in the main computer. Where are those transmissions you intercepted? What have you done with those plans? We intercepted no transmissions. Aaah., This is a consular ship.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="comentario">
                                        <div className="comentario-content">
                                            <div className="comentario-usuario">
                                                <img className="comentario-usuario-icon" />
                                                <div className="comentario-usuario-titulo">
                                                    <h3>LuLuzinha1</h3>
                                                    <h4>Cursa - Nuvem</h4>
                                                </div>
                                            </div>
                                            <div className="comentario-avaliacao">
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                            </div>
                                            <p className="comentario-conteudo">
                                                Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="comentario">
                                        <div className="comentario-content">
                                            <div className="comentario-usuario">
                                                <img className="comentario-usuario-icon" />
                                                <div className="comentario-usuario-titulo">
                                                    <h3>Luzi Henri Moraes</h3>
                                                    <h4>Cursa - Poeira</h4>
                                                </div>
                                            </div>
                                            <div className="comentario-avaliacao">
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                            </div>
                                            <p className="comentario-conteudo">
                                                Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="comentario">
                                        <div className="comentario-content">
                                            <div className="comentario-usuario">
                                                <img className="comentario-usuario-icon" />
                                                <div className="comentario-usuario-titulo">
                                                    <h3>Arthur Poles Grego</h3>
                                                    <h4>Cursa - Nebulosa</h4>
                                                </div>
                                            </div>
                                            <div className="comentario-avaliacao">
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                            </div>
                                            <p className="comentario-conteudo">
                                                Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you been? They're heading in this direction. What are we going to do? We'll be sent to the spice mine of Kessel or smashed into who knows what! Wait a minute, where are you going? The Death Star plans are not in the main computer. Where are those transmissions you intercepted? What have you done with those plans? We intercepted no transmissions. Aaah., This is a consular ship.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="comentario">
                                        <div className="comentario-content">
                                            <div className="comentario-usuario">
                                                <img className="comentario-usuario-icon" />
                                                <div className="comentario-usuario-titulo">
                                                    <h3>LuLuzinha1</h3>
                                                    <h4>Cursa - Nuvem</h4>
                                                </div>
                                            </div>
                                            <div className="comentario-avaliacao">
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                            </div>
                                            <p className="comentario-conteudo">
                                                Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                                <div className="nav-comentarios">

                                    <div className="comentario">
                                        <div className="comentario-content">
                                            <div className="comentario-usuario">
                                                <img className="comentario-usuario-icon" />
                                                <div className="comentario-usuario-titulo">
                                                    <h3>LuLuzinha1</h3>
                                                    <h4>Cursa - Nuvem</h4>
                                                </div>
                                            </div>
                                            <div className="comentario-avaliacao">
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                            </div>
                                            <p className="comentario-conteudo">
                                                Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="comentario">
                                        <div className="comentario-content">
                                            <div className="comentario-usuario">
                                                <img className="comentario-usuario-icon" />
                                                <div className="comentario-usuario-titulo">
                                                    <h3>Luzi Henri Moraes</h3>
                                                    <h4>Cursa - Poeira</h4>
                                                </div>
                                            </div>
                                            <div className="comentario-avaliacao">
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                            </div>
                                            <p className="comentario-conteudo">
                                                Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="comentario">
                                        <div className="comentario-content">
                                            <div className="comentario-usuario">
                                                <img className="comentario-usuario-icon" />
                                                <div className="comentario-usuario-titulo">
                                                    <h3>Arthur Poles Grego</h3>
                                                    <h4>Cursa - Nebulosa</h4>
                                                </div>
                                            </div>
                                            <div className="comentario-avaliacao">
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                            </div>
                                            <p className="comentario-conteudo">
                                                Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you been? They're heading in this direction. What are we going to do? We'll be sent to the spice mine of Kessel or smashed into who knows what! Wait a minute, where are you going? The Death Star plans are not in the main computer. Where are those transmissions you intercepted? What have you done with those plans? We intercepted no transmissions. Aaah., This is a consular ship.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="comentario">
                                        <div className="comentario-content">
                                            <div className="comentario-usuario">
                                                <img className="comentario-usuario-icon" />
                                                <div className="comentario-usuario-titulo">
                                                    <h3>Luzi Henri Moraes</h3>
                                                    <h4>Cursa - Poeira</h4>
                                                </div>
                                            </div>
                                            <div className="comentario-avaliacao">
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                            </div>
                                            <p className="comentario-conteudo">
                                                Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="comentario">
                                        <div className="comentario-content">
                                            <div className="comentario-usuario">
                                                <img className="comentario-usuario-icon" />
                                                <div className="comentario-usuario-titulo">
                                                    <h3>Arthur Poles Grego</h3>
                                                    <h4>Cursa - Nebulosa</h4>
                                                </div>
                                            </div>
                                            <div className="comentario-avaliacao">
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                            </div>
                                            <p className="comentario-conteudo">
                                                Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you been? They're heading in this direction. What are we going to do? We'll be sent to the spice mine of Kessel or smashed into who knows what! Wait a minute, where are you going? The Death Star plans are not in the main computer. Where are those transmissions you intercepted? What have you done with those plans? We intercepted no transmissions. Aaah., This is a consular ship.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="comentario">
                                        <div className="comentario-content">
                                            <div className="comentario-usuario">
                                                <img className="comentario-usuario-icon" />
                                                <div className="comentario-usuario-titulo">
                                                    <h3>LuLuzinha1</h3>
                                                    <h4>Cursa - Nuvem</h4>
                                                </div>
                                            </div>
                                            <div className="comentario-avaliacao">
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                            </div>
                                            <p className="comentario-conteudo">
                                                Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="comentario">
                                        <div className="comentario-content">
                                            <div className="comentario-usuario">
                                                <img className="comentario-usuario-icon" />
                                                <div className="comentario-usuario-titulo">
                                                    <h3>Luzi Henri Moraes</h3>
                                                    <h4>Cursa - Poeira</h4>
                                                </div>
                                            </div>
                                            <div className="comentario-avaliacao">
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                            </div>
                                            <p className="comentario-conteudo">
                                                Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="comentario">
                                        <div className="comentario-content">
                                            <div className="comentario-usuario">
                                                <img className="comentario-usuario-icon" />
                                                <div className="comentario-usuario-titulo">
                                                    <h3>Arthur Poles Grego</h3>
                                                    <h4>Cursa - Nebulosa</h4>
                                                </div>
                                            </div>
                                            <div className="comentario-avaliacao">
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                            </div>
                                            <p className="comentario-conteudo">
                                                Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you been? They're heading in this direction. What are we going to do? We'll be sent to the spice mine of Kessel or smashed into who knows what! Wait a minute, where are you going? The Death Star plans are not in the main computer. Where are those transmissions you intercepted? What have you done with those plans? We intercepted no transmissions. Aaah., This is a consular ship.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="comentario">
                                        <div className="comentario-content">
                                            <div className="comentario-usuario">
                                                <img className="comentario-usuario-icon" />
                                                <div className="comentario-usuario-titulo">
                                                    <h3>LuLuzinha1</h3>
                                                    <h4>Cursa - Nuvem</h4>
                                                </div>
                                            </div>
                                            <div className="comentario-avaliacao">
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                                <img src='./assets/estrela-clara.svg' />
                                            </div>
                                            <p className="comentario-conteudo">
                                                Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="button-mais-comentarios" onClick={maisAvaliacoes}>
                                <img alt="seta-pa-baixo" src="./assets/seta-pa-baixo.svg" />
                            </div>
                        </div>



                        <div className="container-texto">
                            <h2 id="sessao-planos">CONHEÇA OS NOSSOS</h2>
                            <h1>PLANOS</h1>
                            <div className="video-planos">
                                <div>
                                    <div className="video-planos-background"></div>
                                    <img alt="Iniciar video sobre planos" src="./assets/play.svg" />
                                </div>
                            </div>
                            <span>
                                <p>
                                    Após assistir o vídeo acima e entender como os nossos cursos funcionam, agora você poderá escolher qual o melhor plano para você.
                                </p>
                            </span>
                            <div className="container-planos">
                                <div className="plano">
                                    <img src="./assets/background-padrao2.jpg!d" />
                                    <h2>ÓRBITA</h2>
                                    <p>"I'll get Dumbledore if you let go of me," said Harry. "Just let go, Mr. Crouch, and I'll get him.. . ."</p>
                                    <h3>A PARTIR DE</h3>
                                    <div className="plano-button">R$900.99</div>
                                    <div className="plano-nav-beneficios">
                                        <div className="nav-beneficio"><p>Beneficio 1</p> <img src="./assets/check-claro.svg" /></div>
                                        <div className="nav-beneficio"><p>Beneficio 2</p> <img src="./assets/check-claro.svg" /></div>
                                        <div className="nav-beneficio"><p>Beneficio 3</p> <img src="./assets/check-escuro.svg" /></div>
                                        <div className="nav-beneficio"><p>Beneficio 4</p> <img src="./assets/check-escuro.svg" /></div>
                                        <div className="nav-beneficio"><p>Beneficio 5</p> <img src="./assets/check-escuro.svg" /></div>
                                    </div>
                                </div>
                                <div className="plano">
                                    <img src="./assets/background-padrao2.jpg!d" />
                                    <h2>GALÁXIA</h2>
                                    <p>"I'll get Dumbledore if you let go of me," said Harry. "Just let go, Mr. Crouch, and I'll get him.. . ."</p>
                                    <h3>A PARTIR DE</h3>
                                    <div className="plano-button">R$990.99</div>
                                    <div className="plano-nav-beneficios">
                                        <div className="nav-beneficio"><p>Beneficio 1</p> <img src="./assets/check-claro.svg" /></div>
                                        <div className="nav-beneficio"><p>Beneficio 2</p> <img src="./assets/check-claro.svg" /></div>
                                        <div className="nav-beneficio"><p>Beneficio 3</p> <img src="./assets/check-claro.svg" /></div>
                                        <div className="nav-beneficio"><p>Beneficio 4</p> <img src="./assets/check-escuro.svg" /></div>
                                        <div className="nav-beneficio"><p>Beneficio 5</p> <img src="./assets/check-escuro.svg" /></div>
                                    </div>
                                </div>
                                <div className="plano plano-universo">
                                    <img src="./assets/background-padrao2.jpg!d" />
                                    <h2>UNIVERSO</h2>
                                    <p>"I'll get Dumbledore if you let go of me," said Harry. "Just let go, Mr. Crouch, and I'll get him.. . ."</p>
                                    <h3>A PARTIR DE</h3>
                                    <div className="plano-button">R$999.99</div>
                                    <div className="plano-nav-beneficios">
                                        <div className="nav-beneficio"><p>Beneficio 1</p> <img src="./assets/check-claro2.svg" /></div>
                                        <div className="nav-beneficio"><p>Beneficio 2</p> <img src="./assets/check-claro2.svg" /></div>
                                        <div className="nav-beneficio"><p>Beneficio 3</p> <img src="./assets/check-claro2.svg" /></div>
                                        <div className="nav-beneficio"><p>Beneficio 4</p> <img src="./assets/check-claro2.svg" /></div>
                                        <div className="nav-beneficio"><p>Beneficio 5</p> <img src="./assets/check-claro2.svg" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
            </>
        )
    }

    export default Home;