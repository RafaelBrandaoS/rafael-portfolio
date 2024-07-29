/* animações */
var item = document.querySelectorAll("[data-anima]")

function animeScroll() {
    let windowTop = window.pageYOffset + window.innerHeight * 0.8

    item.forEach((element) => {
        if(windowTop > element.offsetTop) {
            element.classList.add("animate")
        } else {
            element.classList.remove("animate")
        }
    })
}

animeScroll()

window.addEventListener("scroll", function() {
    animeScroll()
})

/* menu */
var menuBar = document.querySelector('#burguer')

menuBar.addEventListener('click', function() {
    let menuMobile = document.querySelector('.cabecalho-menu')

    if (menuMobile.classList.contains('mostrar-menu')) {
        menuMobile.classList.remove('mostrar-menu')
        menuBar.innerHTML = 'menu'
    } else {
        menuMobile.classList.add('mostrar-menu')
        menuBar.innerHTML = 'close'
    }

    menuMobile.addEventListener('click', function() {
        menuMobile.classList.remove('mostrar-menu')
        menuBar.innerHTML = 'menu'
    })
})

/* mostrar mais sobre projetos */
var projetos = [
    {id: 'p-calculadora', mais: 'projeto-calculadora', close: 'projeto-calculadora-close'},
    {id: 'p-lista', mais: 'projeto-lista', close: 'projeto-lista-close'},
    {id: 'p-cronometro', mais: 'projeto-cronometro', close: 'projeto-cronometro-close'},
    {id: 'j-dino', mais: 'jogo-dino', close: 'jogo-dino-close'},
    {id: 'p-cardapio', mais: 'projeto-cardapio', close: 'cardapio-close'},
    {id: 'p-cardapio-admin', mais: 'projeto-cardapio-admin', close: 'cardapio-admin-close'}
]

projetos.forEach(function(projeto) {
    let btnProjeto = document.getElementById(projeto.id)
    let mais = document.getElementById(projeto.mais)
    let close = document.getElementById(projeto.close)
    
    btnProjeto.addEventListener('click', function() {
        mais.classList.add('projeto-mais-ativo')

        close.addEventListener('click', function() {
            mais.classList.remove('projeto-mais-ativo')
        })
    })
})