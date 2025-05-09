const menuu = document.getElementById("menu-icone");
const links = document.getElementById("header-links")
const footerConteudo = document.getElementById("footer-conteudo")

menuu.addEventListener("click", () => {
    links.classList.toggle("ativo")
    footerConteudo.classList.toggle("ativo")
})