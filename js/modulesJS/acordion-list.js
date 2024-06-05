export default function acordionList() {

    const dts = document.querySelectorAll(".faq-lista dt");
    const dds = document.querySelectorAll(".faq-lista dd");

    function ativaDD(e) {
        this.classList.toggle('ativo')
        const dt = e.target;
        const dd = dt.nextElementSibling;
        dd.classList.toggle('ativo')
    }

    dts.forEach((dt) => dt.addEventListener("click", ativaDD));
}