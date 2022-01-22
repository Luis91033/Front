const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Televisión 50 pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audífonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
];

// For Each

carrito.forEach((producto) => {
    console.log(producto.nombre)
})

// map

carrito.map((producto) => {
    console.log(producto.nombre)
})