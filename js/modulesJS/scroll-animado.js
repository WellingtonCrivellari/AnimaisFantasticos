export default function scrollAnimado() {

    const sections = document.querySelectorAll('.grid-section');
    const metadeTela = window.innerHeight * 0.6;

    function animaScroll() {
        sections.forEach((section) => {

            const sectionTop = section.getBoundingClientRect().top;
            const isSectionVisible = (sectionTop - metadeTela) < 0;
            if (isSectionVisible)
                section.classList.add('ativa')
            else
                section.classList.remove('ativa')

        })
    }

    animaScroll()

    window.addEventListener('scroll', animaScroll);
}