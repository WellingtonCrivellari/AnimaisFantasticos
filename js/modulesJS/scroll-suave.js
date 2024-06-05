export default function scrollSuave() {

    const section = document.querySelectorAll(".grid-section");
    const linksInterno = document.querySelectorAll("a[href ^='#'")

    function scrollSection(e) {

        e.preventDefault();
        const href = e.currentTarget.getAttribute('href')
        const section = document.querySelector(href)

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })


        /*  //FORMA ALTERNATIVA//
        const topo = section.offsetTop 
        window.scrollTo({
            top: topo,
            behavior: 'smooth', 
        })*/
    }

    linksInterno.forEach((link) => {
        link.addEventListener('click', scrollSection)
    })

}
