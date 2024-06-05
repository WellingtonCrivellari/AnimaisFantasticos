export default function tabNav() {

    const imagens = document.querySelectorAll('.animais-lista li img');
    const paragrafos = document.querySelectorAll('.animais-descricao section');

    ativaSection(0)

    function ativaSection(i) {
        paragrafos.forEach((paragrafo) => {
            paragrafo.classList.remove('ativo');
        });
        const direcaoAnime = paragrafos[i].dataset.anime
        paragrafos[i].classList.add('ativo', direcaoAnime);
    }

    imagens.forEach((imagem, index) => {
        imagem.addEventListener('click', () => {
            ativaSection(index);
        });
    });
}