const mobileMenuButton = document.getElementById('mobileMenu');
const navLinksList = document.getElementById('navLinks');
const navLinksItems = document.querySelectorAll('.nav-links li a');

mobileMenuButton.addEventListener('click', () => {
    navLinksList.classList.toggle('active');
});

// Fecha o menu ao clicar em qualquer link (importante para mobile)
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinksList.classList.remove('active');
    });
});

