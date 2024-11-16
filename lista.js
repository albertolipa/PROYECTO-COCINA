// lista_compras.js
document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar todos los botones de cantidad
    const cantidadContainers = document.querySelectorAll(".producto-item");

    cantidadContainers.forEach(container => {
        const btnMenos = container.querySelector(".cantidad button:first-child");
        const btnMas = container.querySelector(".cantidad button:last-child");
        const cantidadSpan = container.querySelector(".cantidad span");

        // Inicializar la cantidad
        let cantidad = parseInt(cantidadSpan.textContent);

        // Disminuir cantidad
        btnMenos.addEventListener("click", () => {
            if (cantidad > 1) {
                cantidad--;
                cantidadSpan.textContent = cantidad;
            }
        });

        // Aumentar cantidad
        btnMas.addEventListener("click", () => {
            cantidad++;
            cantidadSpan.textContent = cantidad;
        });
    });
});

