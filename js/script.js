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

// projeto android
projetoAndroid.addEventListener('click', function() {
    let mais = document.getElementById('projeto-android')
    let close = document.getElementById('projeto-android-close')

    mais.classList.add('projeto-mais-ativo')

    close.addEventListener('click', function() {
        mais.classList.remove('projeto-mais-ativo')
    })

})

// projeto cordel
projetoCordel.addEventListener('click', function() {
    let mais = document.getElementById('projeto-cordel')
    let close = document.getElementById('projeto-cordel-close')

    mais.classList.add('projeto-mais-ativo')

    close.addEventListener('click', function() {
        mais.classList.remove('projeto-mais-ativo')
    })

})

// projeto social
projetoSocial.addEventListener('click', function() {
    let mais = document.getElementById('projeto-social')
    let close = document.getElementById('projeto-social-close')

    mais.classList.add('projeto-mais-ativo')

    close.addEventListener('click', function() {
        mais.classList.remove('projeto-mais-ativo')
    })

})

// projeto hora
projetoHora.addEventListener('click', function() {
    let mais = document.getElementById('projeto-hora')
    let close = document.getElementById('projeto-hora-close')

    mais.classList.add('projeto-mais-ativo')

    close.addEventListener('click', function() {
        mais.classList.remove('projeto-mais-ativo')
    })

})

// projeto idade
projetoIdade.addEventListener('click', function() {
    let mais = document.getElementById('projeto-idade')
    let close = document.getElementById('projeto-idade-close')

    mais.classList.add('projeto-mais-ativo')

    close.addEventListener('click', function() {
        mais.classList.remove('projeto-mais-ativo')
    })

})

// projeto calculadora
projetoCalculadora.addEventListener('click', function() {
    let mais = document.getElementById('projeto-calculadora')
    let close = document.getElementById('projeto-calculadora-close')

    mais.classList.add('projeto-mais-ativo')

    close.addEventListener('click', function() {
        mais.classList.remove('projeto-mais-ativo')
    })

})

// projeto lista
projetoLista.addEventListener('click', function() {
    let mais = document.getElementById('projeto-lista')
    let close = document.getElementById('projeto-lista-close')

    mais.classList.add('projeto-mais-ativo')

    close.addEventListener('click', function() {
        mais.classList.remove('projeto-mais-ativo')
    })

})

/* habilidades */
var htmlClick = document.getElementById('html-box')
var cssClick = document.getElementById('css-box')
var jsClick = document.getElementById('js-box')
var gitClick = document.getElementById('git-box')
var gitHubClick = document.getElementById('github-box')

// HTML
htmlClick.addEventListener('mouseover', function() {
    let htmlSobre = document.getElementById('html-sobre')

    htmlSobre.classList.add('habilidades-ativo')

    htmlClick.addEventListener('mouseout', function() {
        htmlSobre.classList.remove('habilidades-ativo')
    })
})

// CSS
cssClick.addEventListener('mouseover', function() {
    let cssSobre = document.getElementById('css-sobre')

    cssSobre.classList.add('habilidades-ativo')

    cssClick.addEventListener('mouseout', function() {
        cssSobre.classList.remove('habilidades-ativo')
    })
})

// javaScript
jsClick.addEventListener('mouseover', function() {
    let jsSobre = document.getElementById('js-sobre')

    jsSobre.classList.add('habilidades-ativo')

    jsClick.addEventListener('mouseout', function() {
        jsSobre.classList.remove('habilidades-ativo')
    })
})

// Git
gitClick.addEventListener('mouseover', function() {
    let gitSobre = document.getElementById('git-sobre')

    gitSobre.classList.add('habilidades-ativo')

    gitClick.addEventListener('mouseout', function() {
        gitSobre.classList.remove('habilidades-ativo')
    })
})

// CSS
gitHubClick.addEventListener('mouseover', function() {
    let cssSobre = document.getElementById('github-sobre')

    cssSobre.classList.add('habilidades-ativo')

    gitHubClick.addEventListener('mouseout', function() {
        cssSobre.classList.remove('habilidades-ativo')
    })
})