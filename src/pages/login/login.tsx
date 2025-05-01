function CadastroEntrar() {
    const loginWithGoogle = () => {
        window.location.href = "http://localhost:4000/auth/google";
      };
    return (
        <>
            <h1 style={{color: "#fff"}}>Pagina de CadastroEntrar</h1>
            <button onClick={loginWithGoogle}>Cadastro com o google</button>
        </>
    )
}

export default CadastroEntrar;