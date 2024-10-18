// Función para abrir el menú
function openNav() {
  const nav = document.getElementById("nav");
  nav.classList.add("nav--active"); // Agrega la clase para mostrar el nav
}

// Función para cerrar el menú
function closeNav() {
  const nav = document.getElementById("nav");
  nav.classList.remove("nav--active"); // Elimina la clase para ocultar el nav
}
