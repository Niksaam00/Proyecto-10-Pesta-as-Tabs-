const tabs = document.querySelectorAll(".tab");
const contenidos = document.querySelectorAll(".contenido");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {

        tabs.forEach((boton) => {
            boton.classList.remove("activa");
        });

        contenidos.forEach((contenido) => {
            contenido.classList.remove("activo");
        });

        tab.classList.add("activa");

        contenidos[index].classList.add("activo");
    });
});