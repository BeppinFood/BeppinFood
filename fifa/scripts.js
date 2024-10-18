// Seleccionar el icono del menú y la lista de navegación
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

// Añadir el evento de clic al icono del menú
menuIcon.addEventListener('click', () => {
    // Alternar la clase 'active' en la lista de navegación
    navLinks.classList.toggle('active');
});



// Seleccionamos los elementos que queremos revelar
const revealElements = document.querySelectorAll('.reveal');

// Configuramos el Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Agregamos la clase "visible" cuando el elemento es visible
            entry.target.classList.add('visible');
            // Dejamos de observar el elemento una vez que ha aparecido
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 }); // Umbral del 50% para activar la animación

// Observamos cada uno de los elementos
revealElements.forEach(element => {
    observer.observe(element);
});
