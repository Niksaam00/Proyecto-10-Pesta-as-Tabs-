const tabs = document.querySelectorAll(".tab");
const contenidos = document.querySelectorAll(".contenido");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {

        // Quitar la clase activa de todos los botones
        tabs.forEach((boton) => {
            boton.classList.remove("activa");
        });

        // Ocultar todos los contenidos
        contenidos.forEach((contenido) => {
            contenido.classList.remove("activo");
        });

        // Activar el botón seleccionado
        tab.classList.add("activa");

        // Mostrar el contenido correspondiente
        contenidos[index].classList.add("activo");
    });
});