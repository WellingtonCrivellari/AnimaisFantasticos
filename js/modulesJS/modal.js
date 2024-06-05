export default function modal() {

    const navLogin = document.querySelector("[data-modal='abrir']")
    const xModal = document.querySelector(".close")
    const modalContainer = document.querySelector(".modal-container")


    navLogin.addEventListener("click", abrirModal)
    xModal.addEventListener("click", fecharModal)
    modalContainer.addEventListener("click", fecharForaModal)

    function abrirModal(e) {
        e.preventDefault()
        modalContainer.classList.add('ativa')
    }

    function fecharModal(e) {
        e.preventDefault()
        modalContainer.classList.remove('ativa')
    }

    function fecharForaModal(e) {

        if (e.target === this)
            fecharModal(e)
    }

}