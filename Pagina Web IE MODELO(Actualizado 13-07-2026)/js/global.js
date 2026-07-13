// CONTROL DEL MENÚ EN CELULARES
const botonMenu = document.getElementById('boton-menu');
const menuEnlaces = document.getElementById('menu-enlaces');

if (botonMenu && menuEnlaces) {
    botonMenu.addEventListener('click', () => {
        menuEnlaces.classList.toggle('mostrar');
    });

    const enlaces = menuEnlaces.querySelectorAll('a');
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', () => {
            menuEnlaces.classList.remove('mostrar');
        });
    });
}

// CONTROL DEL MODO OSCURO
const botonOscuro = document.getElementById('boton-oscuro');

if (botonOscuro) {
    botonOscuro.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            botonOscuro.innerHTML = "☀️ Modo Claro";
        } else {
            botonOscuro.innerHTML = "🌙 Modo Oscuro";
        }
    });
}

// EFECTO DE SCROLL PARA LA NAVBAR
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.barra-navegacion');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});