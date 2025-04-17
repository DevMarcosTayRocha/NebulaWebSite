const menu = document.getElementById("menu-icone")
const config = document.getElementById("configuracoes-icone")

const barraLateral = document.getElementById("menu-barra-lateral")
const textoBarra = document.querySelectorAll(".texto-barra")
const iconeBarra = document.querySelectorAll(".menu-icones")

menu.addEventListener("click", () => {
    barraLateral.classList.toggle("ativo")
    textoBarra.forEach(texto => {
        texto.classList.toggle("ativo")
    })
})

config.addEventListener("click", () => {

    barraLateral.classList.toggle("claro")
    iconeBarra.forEach(icone => {
        icone.classList.toggle("claro")
    })

})