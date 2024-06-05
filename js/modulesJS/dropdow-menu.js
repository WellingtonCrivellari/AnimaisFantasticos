export default function dropdowMenu() {

    const dropdowMenus = document.querySelectorAll('[data-dropdow]')

    dropdowMenus.forEach(menu => {
        ['touchstart', 'click'].forEach(userEvent => {
            menu.addEventListener(userEvent, handleClickSobre)
        })
    })

    function handleClickSobre(event) {
        event.preventDefault()
        this.classList.add('ativa')
        eventClickHtml(this, ['touchstart', 'click'], () => {
            this.classList.remove('ativa')
        })
    }

    function eventClickHtml(element, eventos, callback) {
    
        const html = document.documentElement
        const outside = 'data-outside'
    
        if (!element.hasAttribute(outside)) {
            eventos.forEach(usarEventos => {
                setTimeout(()=>{
                    html.addEventListener(usarEventos, criaQuandoAtivaECH)
                })
            })
    
            element.setAttribute(outside, '')
        }
    
        function criaQuandoAtivaECH(event) {
            if (!element.contains(event.target)) {
                element.removeAttribute(outside, '')
                eventos.forEach(usarEventos => {
                    html.removeEventListener(usarEventos, criaQuandoAtivaECH)
                })
                callback()
            }
        }
    }
}