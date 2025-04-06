// Definimos una constante 'bd' que es un array de objetos, cada uno representa un profesor
const bd = [
    {
        nombre: "Carlos Arebola",
        url_imagen: "https://www.fpllefia.com/images/imagenes/profesores/foto2_carlos.jpg",
        profesion: "El mejor Profesor"
    },
    {
        nombre: "Juan Montero",
        url_imagen: "https://www.fpllefia.com/images/imagenes/profesores/juan_montero.jpg",
        profesion: "Profesor"
    },
    {
        nombre: "Raul Sanchez",
        url_imagen: "https://www.fpllefia.com/images/2021/03/24/raul-2.jpg",
        profesion: "Profesor"
    },
    {
        nombre: "Oscar Garcia",
        url_imagen: "https://www.fpllefia.com/images/imagenes/profesores/fotooscar.png",
        profesion: "Profesor"
    },
    {
        nombre: "Eva Aranda",
        url_imagen: "https://www.fpllefia.com/images/imagenes/profesores/fotoeva.png",
        profesion: "Profesor"
    },
    {
        nombre: "Albert Arrebola",
        url_imagen: "https://www.fpllefia.com/images/imagenes/profesores/foto_albert.png",
        profesion: "Profesor"
    },
    {
        nombre: "Patricia Salinas",
        url_imagen: "https://www.fpllefia.com/images/imagenes/profesores/patricia_salinas.jpg",
        profesion: "Profesor"
    },
    {
        nombre: "Ana Rovira",
        url_imagen: "https://www.fpllefia.com/images/imagenes/profesores/anna_rovira1.jpg",
        profesion: "Profesor"
    },
    {
        nombre: "Joan domingo",
        url_imagen: "https://www.fpllefia.com/images/imagenes/profesores/joan-1.jpg",
        profesion: "Profesor"
    },
];

// Definimos la función 'Profesores' que creará el HTML de las tarjetas
function Profesores() {
    let imgprofes = ""; // Variable donde acumularemos el HTML de todas las tarjetas

    // Bucle que recorre cada elemento del array 'bd'
    for (let i = 0; i < bd.length; i++) {

        // Concatenamos a 'imgprofes' el HTML de una tarjeta usando la información del profesor
        imgprofes = imgprofes + `
            <div class="tarjeta">
                <div class="imagen">
                    <img src="${bd[i].url_imagen}" alt="">
                </div>
                <div class="nombre">${bd[i].nombre}</div>
                <div class="profesion">${bd[i].profesion}</div>
            </div>  
        `;
    }

    // Insertamos todo el HTML generado dentro del elemento que tiene la clase 'contenedor'
    document.querySelector(".contenedor").innerHTML = imgprofes;
}

// Llamamos a la función 'Profesores' para ejecutar todo lo anterior
Profesores();
