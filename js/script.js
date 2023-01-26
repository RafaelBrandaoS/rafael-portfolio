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
var projetoAndroid = document.getElementById('p-android')
var projetoCordel = document.getElementById('p-cordel')
var projetoSocial = document.getElementById('p-social')
var projetoHora = document.getElementById('p-hora')
var projetoIdade = document.getElementById('p-idade')
var projetoCalculadora = document.getElementById('p-calculadora')
var projetoLista = document.getElementById('p-lista')


// função de mostrar ou esconder os projetos
function ativarDesativar(mais, close) {
    mais.classList.add('projeto-mais-ativo')

    close.addEventListener('click', function() {
        mais.classList.remove('projeto-mais-ativo')
    })
}

// projeto android
projetoAndroid.addEventListener('click', function() {
    let mais = document.getElementById('projeto-android')
    let close = document.getElementById('projeto-android-close')
    
    ativarDesativar(mais, close)
})

// projeto cordel
projetoCordel.addEventListener('click', function() {
    let mais = document.getElementById('projeto-cordel')
    let close = document.getElementById('projeto-cordel-close')

    ativarDesativar(mais, close)
})

// projeto social
projetoSocial.addEventListener('click', function() {
    let mais = document.getElementById('projeto-social')
    let close = document.getElementById('projeto-social-close')

    ativarDesativar(mais, close)
})

// projeto hora
projetoHora.addEventListener('click', function() {
    let mais = document.getElementById('projeto-hora')
    let close = document.getElementById('projeto-hora-close')

    ativarDesativar(mais, close)
})

// projeto idade
projetoIdade.addEventListener('click', function() {
    let mais = document.getElementById('projeto-idade')
    let close = document.getElementById('projeto-idade-close')

    ativarDesativar(mais, close)
})

// projeto calculadora
projetoCalculadora.addEventListener('click', function() {
    let mais = document.getElementById('projeto-calculadora')
    let close = document.getElementById('projeto-calculadora-close')

    ativarDesativar(mais, close)
})

// projeto lista
projetoLista.addEventListener('click', function() {
    let mais = document.getElementById('projeto-lista')
    let close = document.getElementById('projeto-lista-close')

    ativarDesativar(mais, close)
})

/* habilidades */
var htmlClick = document.getElementById('html-box')
var cssClick = document.getElementById('css-box')
var jsClick = document.getElementById('js-box')
var gitClick = document.getElementById('git-box')
var gitHubClick = document.getElementById('github-box')


// função de mostrar e esconder as habilidades
function habilidades(sobre, click) {
    sobre.classList.add('habilidades-ativo')

    click.addEventListener('mouseout', function() {
        sobre.classList.remove('habilidades-ativo')
    })
}

// HTML
htmlClick.addEventListener('mouseover', function() {
    let sobre = document.getElementById('html-sobre')
    let click = htmlClick

    habilidades(sobre, click)
})

// CSS
cssClick.addEventListener('mouseover', function() {
    let sobre = document.getElementById('css-sobre')
    let click = cssClick

    habilidades(sobre, click)
})

// javaScript
jsClick.addEventListener('mouseover', function() {
    let sobre = document.getElementById('js-sobre')
    let click = jsClick

    habilidades(sobre, click)
})

// Git
gitClick.addEventListener('mouseover', function() {
    let sobre = document.getElementById('git-sobre')
    let click = gitClick

    habilidades(sobre, click)
})

// CSS
gitHubClick.addEventListener('mouseover', function() {
    let sobre = document.getElementById('github-sobre')
    let click = gitHubClick

    habilidades(sobre, click)
})