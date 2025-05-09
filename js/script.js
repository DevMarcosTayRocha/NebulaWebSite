let abreFechaFiltrosTrue = true

document.getElementById('container-comentarios').style.height = '1000px'

function maisAvaliacoes() {
    let heightContainer = Number(document.getElementById('container-comentarios').style.height.split('').map( a => {return Number(a)} ).filter( a => !isNaN(a) ).join(''))
    if (heightContainer >= 3000) return
    console.log(heightContainer)
    document.getElementById('container-comentarios').style.height = `${heightContainer + 1000}px`
}

function filtroEstrela(qualEstrela) {
    for (let i = 1; i <= 5; i++) {
        if (i === qualEstrela) {
            document.getElementById(`estrela-filtro-${i}`).style.cssText += 'filter: grayscale(0%);'
        } else {
            document.getElementById(`estrela-filtro-${i}`).style.cssText += 'filter: grayscale(100%);'
        }
    }
}

function abreFechaFiltro(trueClick) {
    if (trueClick) {
        setTimeout(() => {
            if (abreFechaFiltrosTrue) {
                document.getElementById('filtros-extra').style.width = '250px'
                document.getElementById('filtros-extra').style.height = 'auto'
                document.getElementById('filtros-extra').style.padding = '25px'
            } else {
                document.getElementById('filtros-extra').style.width = '0px'
                document.getElementById('filtros-extra').style.height = '0px'
                document.getElementById('filtros-extra').style.padding = '0px'
            }
            abreFechaFiltrosTrue = !abreFechaFiltrosTrue
        }, 10)
    } else {
        abreFechaFiltrosTrue = true
    }
}