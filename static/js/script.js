document.addEventListener("DOMContentLoaded", main)

function main() {
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
    const projetos = document.getElementsByClassName('projetos-caixa-m')
    for (const projeto of projetos) {
        projeto.addEventListener("click", (event) => {
            const dados = event.target.parentElement
            const nome = dados.getElementsByClassName('dado-nome')[0].innerText
            const img = dados.getElementsByClassName('dado-img')[0].innerText
            const desc = dados.getElementsByClassName('dado-desc')[0].innerText
            const codigo = dados.getElementsByClassName('dado-codigo')[0].innerText
            const projeto = dados.getElementsByClassName('dado-projeto')[0].innerText
            console.log(codigo, projeto)
            let div = document.createElement('div')
            div.innerHTML = `
            <div class="detalhes-content">
                <h2 class="detalhes-titulo">${nome}</h2>
                <span id="fexar" class="material-symbols-outlined">close</span>
                <div class="detalhes-infos card carregando">
                    <div class="img">
                        <img src="../static/${img}" alt="${nome}">
                    </div>
                    <div class="detalhes-desc-btn card carregando">
                        <p class="detalhes-desc detalhes-txt">${desc}</p>
                        <div class="detalhes-btns">
                            <a class="detalhes-txt" href="${codigo}" target="_blank" rel="noopener noreferrer">Ver códigos</a>
                            <a class="detalhes-txt" href="${projeto}" target="_blank" rel="noopener noreferrer">Ver projeto</a>
                        </div>
                    </div>
                </div>
            </div>
            `
            div.classList.add('detalhes')
            document.getElementsByTagName('main')[0].appendChild(div)
            const cardImg = div.querySelector('.img > img')
            cardImg.onload = () => {
                div.getElementsByClassName('card')[0].classList.remove('carregando')
                div.getElementsByClassName('card')[1].classList.remove('carregando')
            }
            document.body.style.overflowY = 'hidden'
            const fexar = document.getElementById('fexar')
            fexar.addEventListener("click", () => {
                div.remove()
                document.body.style.overflowY = 'scroll'
            })
        })
    }
}