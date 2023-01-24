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