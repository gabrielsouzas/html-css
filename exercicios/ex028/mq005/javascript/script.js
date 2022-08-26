function clickMenu() {
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}

// Monitorar o tamanho do site
function mudouTamanho() {
    /* Se a largura da tela for maior ou igual a 768 pixels */
    if (window.innerWidth >= 768) {
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
}