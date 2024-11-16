// script.js
function buscarRecetas() {
    // Obtener el valor ingresado por el usuario y convertirlo a minúsculas para evitar problemas de coincidencia de mayúsculas
    const ingredientesInput = document.getElementById('ingredientes').value.toLowerCase();
    const recetas = document.querySelectorAll('.tarjeta-receta'); // Asegúrate de que las recetas tengan la clase 'tarjeta-receta'

    // Recorrer cada tarjeta de receta y verificar si contiene los ingredientes ingresados
    recetas.forEach(receta => {
        const descripcion = receta.querySelector('p').textContent.toLowerCase();
        if (descripcion.includes(ingredientesInput)) {
            receta.style.display = 'block'; // Mostrar la receta si coincide
        } else {
            receta.style.display = 'none'; // Ocultar la receta si no coincide
        }
    });
}

function mostrarIngredientes(imagen) {
    // Encontrar el contenedor de los ingredientes en la misma tarjeta de receta
    const ingredientes = imagen.nextElementSibling.nextElementSibling; // Saltamos el h3
    // Cambiar la visibilidad
    if (ingredientes.style.display === "none") {
        ingredientes.style.display = "block";
    } else {
        ingredientes.style.display = "none";
    }
}



 // FUNCION GUARDAR O FAVORITOS 
function mostrarIngredientes(imagen) {
    // Encontrar el contenedor de los ingredientes en la misma tarjeta de receta
    const ingredientes = imagen.closest('.tarjeta-receta').querySelector('.ingredientes');
    // Cambiar la visibilidad
    if (ingredientes.style.display === "none") {
        ingredientes.style.display = "block";
    } else {
        ingredientes.style.display = "none";
    }
}



function mostrarIngredientes(elemento) {
    const overlay = elemento.querySelector('.ingredientes-overlay');
    overlay.classList.toggle('mostrar');
}




