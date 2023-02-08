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
    {id: 'p-android', mais: 'projeto-android', close: 'projeto-android-close'},
    {id: 'p-cordel', mais: 'projeto-cordel', close: 'projeto-cordel-close'},
    {id: 'p-social', mais: 'projeto-social', close: 'projeto-social-close'},
    {id: 'p-hora', mais: 'projeto-hora', close: 'projeto-hora-close'},
    {id: 'p-idade', mais: 'projeto-idade', close: 'projeto-idade-close'},
    {id: 'p-calculadora', mais: 'projeto-calculadora', close: 'projeto-calculadora-close'},
    {id: 'p-lista', mais: 'projeto-lista', close: 'projeto-lista-close'},
    {id: 'p-cronometro', mais: 'projeto-cronometro', close: 'projeto-cronometro-close'}
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

/* habilidades */
var elements = [
    {id: 'html-box', sobre: 'html-sobre'},
    {id: 'css-box', sobre: 'css-sobre'},
    {id: 'js-box', sobre: 'js-sobre'},
    {id: 'git-box', sobre: 'git-sobre'},
    {id: 'github-box', sobre: 'github-sobre'},
]

function habilidades(sobre, click) {
    sobre.classList.add('habilidades-ativo')

    click.addEventListener('mouseout', function() {
        sobre.classList.remove('habilidades-ativo')
    })
}

elements.forEach(function(elem) {
    let click = document.getElementById(elem.id)
    let sobre = document.getElementById(elem.sobre)

    click.addEventListener('mouseover', function() {
        habilidades(sobre, click)
    })
})