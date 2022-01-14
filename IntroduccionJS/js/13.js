//Objetos
const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300, 
    disponible: true 
}

const medidas = {
    peso: '1kg',
    medida: '1m',
}

const nuevoproducto ={...producto, ...medidas}; //Método de unir 2 objetos sin modificar nignuno de los 2 originales.

console.log(producto);
console.log(nuevoproducto);