"use strict" //Corre JS en modo experto
//Objetos
const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300, 
    disponible: true 
}

Object.freeze(producto); //Impide agregar más propiedades y ni se modifique

producto.imagen = 'imagen.jpg';

console.log(producto);