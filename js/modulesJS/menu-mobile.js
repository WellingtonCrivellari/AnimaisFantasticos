export default function menuMobile() {

    const btnMenu = document.querySelector('.btn-menu')
    const menuLista = document.querySelector('.menu-lista')

    btnMenu.addEventListener('click', abrirMenu)
    menuLista.addEventListener('click', abrirMenu)

    function abrirMenu(event) {
        event.preventDefault()
        btnMenu.classList.add('ativa')
        menuLista.classList.add('ativa')

        clickNoHtml(this, () => {
            btnMenu.classList.remove('ativa')
            menuLista.classList.remove('ativa')
        })
    }

    function clickNoHtml(element, callback) {
        const html = document.documentElement
        html.addEventListener('click', clicouFora)

        function clicouFora(event) {
            if (!element.contains(event.target)) {
                html.removeEventListener('click', clicouFora)
                callback();
            }
        }
    }


}
