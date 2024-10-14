// Seleciona o ícone de hambúrguer e os links de navegação
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Adiciona o evento de clique para mostrar ou esconder os links
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show'); // Alterna a classe 'show' para exibir os links
});
