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

    mais.classList.add('ativar')

    close.addEventListener('click', function() {
        mais.classList.remove('ativar')
    })

})

// projeto cordel
var projetoCordel = document.getElementById('p-cordel')

projetoCordel.addEventListener('click', function() {
    let mais = document.getElementById('projeto-cordel')
    let close = document.getElementById('projeto-cordel-close')

    mais.classList.add('ativar')

    close.addEventListener('click', function() {
        mais.classList.remove('ativar')
    })

})

// projeto social
var projetoSocial = document.getElementById('p-social')

projetoSocial.addEventListener('click', function() {
    let mais = document.getElementById('projeto-social')
    let close = document.getElementById('projeto-social-close')

    mais.classList.add('ativar')

    close.addEventListener('click', function() {
        mais.classList.remove('ativar')
    })

})

// projeto hora
var projetoHora = document.getElementById('p-hora')

projetoHora.addEventListener('click', function() {
    let mais = document.getElementById('projeto-hora')
    let close = document.getElementById('projeto-hora-close')

    mais.classList.add('ativar')

    close.addEventListener('click', function() {
        mais.classList.remove('ativar')
    })

})

// projeto idade
var projetoIdade = document.getElementById('p-idade')

projetoIdade.addEventListener('click', function() {
    let mais = document.getElementById('projeto-idade')
    let close = document.getElementById('projeto-idade-close')

    mais.classList.add('ativar')

    close.addEventListener('click', function() {
        mais.classList.remove('ativar')
    })

})

// projeto calculadora
var projetoCalculadora = document.getElementById('p-calculadora')

projetoCalculadora.addEventListener('click', function() {
    let mais = document.getElementById('projeto-calculadora')
    let close = document.getElementById('projeto-calculadora-close')

    mais.classList.add('ativar')

    close.addEventListener('click', function() {
        mais.classList.remove('ativar')
    })

})

// projeto lista
var projetoLista = document.getElementById('p-lista')

projetoLista.addEventListener('click', function() {
    let mais = document.getElementById('projeto-lista')
    let close = document.getElementById('projeto-lista-close')

    mais.classList.add('ativar')

    close.addEventListener('click', function() {
        mais.classList.remove('ativar')
    })

})