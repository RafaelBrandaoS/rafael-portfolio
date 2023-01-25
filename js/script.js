/* menu */
// pegar o botão do menu
var menuBar = document.querySelector('#burguer')

// adicionar evento click no butão do menu
menuBar.addEventListener('click', function() {

    // pegar o menu 
    let menuMobile = document.querySelector('.cabecalho-menu')

    // verificar se o menu está com a classe mostrar-menu
    if (menuMobile.classList.contains('mostrar-menu')) {
        // remover a classe para mostrar o menu
        menuMobile.classList.remove('mostrar-menu')
        // colocar o burguer no butão menu
        menuBar.innerHTML = 'menu'
    } else {
        // adicionar a classe para esconder o menu
        menuMobile.classList.add('mostrar-menu')
        // colocar o x no butão menu
        menuBar.innerHTML = 'close'
    }

    // esconder o menu quando clicar em qualque opção
    menuMobile.addEventListener('click', function() {
        // remover a classe para mostrar o menu
        menuMobile.classList.remove('mostrar-menu')
        // colocar o burguer no butão menu
        menuBar.innerHTML = 'menu'
    })
})

/* mostrar mais sobre projetos */
// projeto android
var projetoAndroid = document.getElementById('p-android')

projetoAndroid.addEventListener('click', function() {
    let mais = document.getElementById('projeto-android')
    let close = document.getElementById('projeto-android-close')

    mais.classList.add('projeto-mais-ativo')

    close.addEventListener('click', function() {
        mais.classList.remove('projeto-mais-ativo')
    })

})

// projeto cordel
var projetoCordel = document.getElementById('p-cordel')

projetoCordel.addEventListener('click', function() {
    let mais = document.getElementById('projeto-cordel')
    let close = document.getElementById('projeto-cordel-close')

    mais.classList.add('projeto-mais-ativo')

    close.addEventListener('click', function() {
        mais.classList.remove('projeto-mais-ativo')
    })

})

// projeto social
var projetoSocial = document.getElementById('p-social')

projetoSocial.addEventListener('click', function() {
    let mais = document.getElementById('projeto-social')
    let close = document.getElementById('projeto-social-close')

    mais.classList.add('projeto-mais-ativo')

    close.addEventListener('click', function() {
        mais.classList.remove('projeto-mais-ativo')
    })

})

// projeto hora
var projetoHora = document.getElementById('p-hora')

projetoHora.addEventListener('click', function() {
    let mais = document.getElementById('projeto-hora')
    let close = document.getElementById('projeto-hora-close')

    mais.classList.add('projeto-mais-ativo')

    close.addEventListener('click', function() {
        mais.classList.remove('projeto-mais-ativo')
    })

})

// projeto idade
var projetoIdade = document.getElementById('p-idade')

projetoIdade.addEventListener('click', function() {
    let mais = document.getElementById('projeto-idade')
    let close = document.getElementById('projeto-idade-close')

    mais.classList.add('projeto-mais-ativo')

    close.addEventListener('click', function() {
        mais.classList.remove('projeto-mais-ativo')
    })

})

// projeto calculadora
var projetoCalculadora = document.getElementById('p-calculadora')

projetoCalculadora.addEventListener('click', function() {
    let mais = document.getElementById('projeto-calculadora')
    let close = document.getElementById('projeto-calculadora-close')

    mais.classList.add('projeto-mais-ativo')

    close.addEventListener('click', function() {
        mais.classList.remove('projeto-mais-ativo')
    })

})

// projeto lista
var projetoLista = document.getElementById('p-lista')

projetoLista.addEventListener('click', function() {
    let mais = document.getElementById('projeto-lista')
    let close = document.getElementById('projeto-lista-close')

    mais.classList.add('projeto-mais-ativo')

    close.addEventListener('click', function() {
        mais.classList.remove('projeto-mais-ativo')
    })

})

// habilidades
// HTML
var htmlClick = document.getElementById('html-box')

htmlClick.addEventListener('mouseover', function() {
    let htmlSobre = document.getElementById('html-sobre')

    htmlSobre.classList.add('habilidades-ativo')

    htmlClick.addEventListener('mouseout', function() {
        htmlSobre.classList.remove('habilidades-ativo')
    })
})

// CSS
var cssClick = document.getElementById('css-box')

cssClick.addEventListener('mouseover', function() {
    let cssSobre = document.getElementById('css-sobre')

    cssSobre.classList.add('habilidades-ativo')

    cssClick.addEventListener('mouseout', function() {
        cssSobre.classList.remove('habilidades-ativo')
    })
})

// javaScript
var jsClick = document.getElementById('js-box')

jsClick.addEventListener('mouseover', function() {
    let jsSobre = document.getElementById('js-sobre')

    jsSobre.classList.add('habilidades-ativo')

    jsClick.addEventListener('mouseout', function() {
        jsSobre.classList.remove('habilidades-ativo')
    })
})

// Git
var gitClick = document.getElementById('git-box')

gitClick.addEventListener('mouseover', function() {
    let gitSobre = document.getElementById('git-sobre')

    gitSobre.classList.add('habilidades-ativo')

    gitClick.addEventListener('mouseout', function() {
        gitSobre.classList.remove('habilidades-ativo')
    })
})

// CSS
var gitHubClick = document.getElementById('github-box')

gitHubClick.addEventListener('mouseover', function() {
    let cssSobre = document.getElementById('github-sobre')

    cssSobre.classList.add('habilidades-ativo')

    gitHubClick.addEventListener('mouseout', function() {
        cssSobre.classList.remove('habilidades-ativo')
    })
})