//Objetos
const producto = {
  nombreProducto: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
};

//Forma anterior de hacerlo
const precioproducto = producto.precio;

//console.log(precioproducto);

//Destructuring
const { precio } = producto;
console.log(precio);

//Extraes el valor de un arreglo
