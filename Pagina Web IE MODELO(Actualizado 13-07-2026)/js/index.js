document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const indicadoresContainer = document.getElementById('indicadoresCarrusel');
    let indiceActual = 0;
    let intervalo;
    const TIEMPO_CAMBIO = 10000; // 10 segundos

    if (slides.length === 0) return;

    function crearIndicadores() {
        if (!indicadoresContainer) return;
        indicadoresContainer.innerHTML = '';
        slides.forEach((_, i) => {
            const boton = document.createElement('button');
            boton.classList.add('indicador');
            if (i === indiceActual) boton.classList.add('activo');
            boton.setAttribute('data-indice', i);
            boton.addEventListener('click', () => {
                irASlide(i);
                resetearIntervalo();
            });
            indicadoresContainer.appendChild(boton);
        });
    }

    function actualizarIndicadores() {
        if (!indicadoresContainer) return;
        const botones = indicadoresContainer.querySelectorAll('.indicador');
        botones.forEach((boton, i) => {
            if (i === indiceActual) {
                boton.classList.add('activo');
            } else {
                boton.classList.remove('activo');
            }
        });
    }

    function irASlide(indice) {
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        indiceActual = (indice + slides.length) % slides.length;
        slides[indiceActual].classList.add('active');
        actualizarIndicadores();
    }

    function siguienteSlide() {
        irASlide(indiceActual + 1);
    }

    function iniciarIntervalo() {
        if (intervalo) clearInterval(intervalo);
        intervalo = setInterval(siguienteSlide, TIEMPO_CAMBIO);
    }

    function resetearIntervalo() {
        iniciarIntervalo();
    }

    crearIndicadores();
    iniciarIntervalo();
});