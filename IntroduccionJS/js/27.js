// POO

 /* Object literal */
const producto = {
    nombre: 'Tablet',     //Nosotros les pasamos los valores
    precio: 4000
}

//Object Constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

//Crear funciones que solo se utilizan en un objeto en específico
Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
}


const producto2 = new Producto('Monitor Curvo de 49"', 800);
const producto3 = new Producto('Laptop', 300);

// `function formatearProducto(producto) {
//     return `El producto ${producto.nombre} tiene un precio de: $ ${producto.precio}`;
// }`

console.log(producto2);
console.log(producto3);

console.log(producto2.formatearProducto());


