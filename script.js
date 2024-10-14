// Seleciona o ícone de hambúrguer e os links de navegação
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinkItems = document.querySelectorAll('.nav-links li a'); // Seleciona todos os links

// Adiciona o evento de clique para mostrar ou esconder os links
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show'); // Alterna a classe 'show' para exibir os links
});

// Adiciona evento de clique para cada link
navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('show'); // Fecha o menu após clicar em qualquer link
    });
});


// Função para abrir o modal ao clicar na imagem
function openModal(img) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const captionText = document.getElementById("caption");

    modal.style.display = "block"; // Exibe o modal
    modalImg.src = img.src; // Define a imagem do modal
    captionText.innerHTML = img.alt; // Define a legenda como o texto alt da imagem
}

// Função para fechar o modal ao clicar no botão de fechar
const closeModal = document.querySelector(".close");
closeModal.onclick = function() {
    const modal = document.getElementById("modal");
    modal.style.display = "none"; // Esconde o modal
}
