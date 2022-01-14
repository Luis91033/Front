const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo'];

const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Televisión 50 pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audífonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
];

//forEach
meses.forEach(function(mes){
    if(mes == 'marzo'){
        console.log('Marzo si existe');
    }
});

//Includes
let resultado = meses.includes('marzo');

//Some ideal para arreglo de objetos
resultado = carrito.some(function(producto) {
    return producto.nombre === 'Tablet'
}) 

//Reduce
resultado = carrito.reduce(function(total, producto) {
    return total + producto.precio
}, 0)

//Filter
resultado = carrito.filter(function(producto) {
    return producto.precio > 400
});
console.log(resultado);