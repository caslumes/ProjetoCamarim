document.querySelectorAll('.container-carrossel').forEach((carrossel)=>{
    const imgs = carrossel.querySelectorAll('[data-img-url]');
    const quadro = carrossel.querySelector('.carrossel');
    const botoesSetas = carrossel.querySelectorAll('[data-index-change]');
    let indiceAtual = 0;

    imgs.forEach((div) => {
        div.style.backgroundImage = `url(./${div.getAttribute('data-img-url')})`;
        const botao = document.createElement('button');
        carrossel.querySelector('.container-indice').appendChild(botao);
    });

    const botoesIndice = carrossel.querySelectorAll('.container-indice > button');

    function slide(proxIndice) {
        if (proxIndice < 0) proxIndice = imgs.length - 1;
        if (proxIndice >= imgs.length) proxIndice = 0;
        botoesIndice[indiceAtual].style.backgroundColor = '';
        botoesIndice[proxIndice].style.backgroundColor = 'white';
        quadro.style.transform = `translateX(-${(proxIndice / imgs.length) * 100}%)`;
        indiceAtual = proxIndice;
    }

    botoesIndice[0].style.backgroundColor = 'white';

    botoesIndice.forEach((botao, indice) => {
        botao.addEventListener('click', () => {
            slide(indice);
        });
    });

    botoesSetas.forEach((botao) => {
        botao.addEventListener('click', () => {
            const mudaIndice = +botao.getAttribute('data-index-change');
            slide(indiceAtual + mudaIndice);
        });
    });
});