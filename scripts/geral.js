document.addEventListener('DOMContentLoaded', iniciarPagina);

function iniciarPagina(){
    iniciarHeader();
    iniciarFooter();
}

function iniciarHeader(){
    const header = document.getElementById('header-principal');
    fetch('header.html')
    .then(response => response.text())
    .then(data => {
        header.innerHTML = data;
        iniciarFuncionalidadeCarrinho();
    })
}

function iniciarFooter(){
    const footer = document.getElementById('footer-principal');
    fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        footer.innerHTML = data;
    })
}

function iniciarNav(){
    const opcao_nav = document.getElementById('nav-principal');
    classe_nav = 'opcao-nav';

    const links = [
        { href: 'pagina-principal.html', text: 'Página Principal', class: classe_nav},
        { href: 'pesquisa.html', text: 'Catálogo', class: classe_nav},
        { href: 'paginadeajuda.html', text: 'Ajuda', class: classe_nav},
        { href: 'paginadecontato.html', text: 'Contato', class: classe_nav}
    ];

    links.forEach(iniciarOpcoesNav, opcao_nav);
}

function iniciarOpcoesNav(link){
    const a = document.createElement('a');
    a.classList.add(link.class);
    a.href = link.href;
    a.textContent = link.text;
    a.addEventListener('click', navegar);
    this.appendChild(a);
}

function navegar(evento){
    evento.preventDefault();
    window.location.href = this.href;
}