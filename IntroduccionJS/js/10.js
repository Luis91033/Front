//Objetos

const nombreProducto ="Monitor 20 Pulgadas"
const precio = 300;
const disponible = true;

//Objetos
const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300, 
    disponible: true 
}

//Agrega nuevas propiedades al objeto
producto.imagen='imagen.jpg'

//Elimina propiedades
delete producto.disponible;

console.log(producto);