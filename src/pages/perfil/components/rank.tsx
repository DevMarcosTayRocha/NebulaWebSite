import "./rank.css"

interface usuarioRankProps {
    fotoRank: string;
    usuarioRank: string;
    pontosRank: number;
    posicaoRank: number;
  }
  
  const UsuarioRank = ({ fotoRank, usuarioRank, pontosRank, posicaoRank }: usuarioRankProps) => {
  
    return (
      <div className="prf-usuarios-rank">
        <div className="prf-container4">
          <div className="prf-foto-rank" style={{ backgroundImage: `url(${fotoRank})` }}></div>
          <div className="prf-nome-rank"><span>{usuarioRank}</span></div>
          <div className="prf-divisao-rank">|</div>
          <div className="prf-pontos-rank"><span>{pontosRank} pts</span></div>
          <div className="prf-divisao-rank">|</div>
          <div className="prf-posisao-rank"><span>{posicaoRank}</span></div>
        </div>
      </div>
  
    )
  }

export function Rank() {

    return (
        <>
            <div className="prf-rank-header">
                <div className="prf-container3">
                    <span>ASTRONAUTAS</span>
                    <div className="prf-pesquisa-usuario">
                        <input type="text" />
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>
                    </div>
                </div>
            </div>

            <UsuarioRank fotoRank="./src/assets/fotoUsuarioExemple.jpg" usuarioRank="Milk" pontosRank={1000} posicaoRank={1} />
            <UsuarioRank fotoRank="./src/assets/fotoUsuarioExemple.jpg" usuarioRank="Milk2" pontosRank={900} posicaoRank={2} />
            <UsuarioRank fotoRank="./src/assets/fotoUsuarioExemple.jpg" usuarioRank="Milk3" pontosRank={800} posicaoRank={3} />
            <UsuarioRank fotoRank="./src/assets/fotoUsuarioExemple.jpg" usuarioRank="Milk4" pontosRank={700} posicaoRank={4} />
            <UsuarioRank fotoRank="./src/assets/fotoUsuarioExemple.jpg" usuarioRank="Milk5" pontosRank={600} posicaoRank={5} />
            <UsuarioRank fotoRank="./src/assets/fotoUsuarioExemple.jpg" usuarioRank="Milk6" pontosRank={500} posicaoRank={6} />
            <UsuarioRank fotoRank="./src/assets/fotoUsuarioExemple.jpg" usuarioRank="Milk7" pontosRank={400} posicaoRank={7} />
            <UsuarioRank fotoRank="./src/assets/fotoUsuarioExemple.jpg" usuarioRank="Milk8" pontosRank={300} posicaoRank={8} />
            <UsuarioRank fotoRank="./src/assets/fotoUsuarioExemple.jpg" usuarioRank="Milk9" pontosRank={250} posicaoRank={9} />
            <UsuarioRank fotoRank="./src/assets/fotoUsuarioExemple.jpg" usuarioRank="Milk0" pontosRank={200} posicaoRank={10} />
        </>
    )
}