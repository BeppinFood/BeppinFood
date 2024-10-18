// Seleccionar el icono del menú y la lista de navegación
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

// Añadir el evento de clic al icono del menú
menuIcon.addEventListener('click', () => {
    // Alternar la clase 'active' en la lista de navegación
    navLinks.classList.toggle('active');
});
