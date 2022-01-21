//Arrow function
const sumar2 = (n1, n2) => {
    console.log(n1 + n2);
}

sumar2(5,10);

const aprendiendo = (tecnologia) => {
    console.log('Aprendiendo ${tecnologia}');
}

aprendiendo('JavaScript');

const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo'];

const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Televisión 50 pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audífonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
];

//forEach
meses.forEach( mes => {
    if(mes == 'marzo'){
        console.log('Marzo si existe');
    }
});

//Some ideal para arreglo de objetos
resultado = carrito.some(producto => {
    return producto.nombre === 'Tablet'
}) 

//Reduce
resultado = carrito.reduce( (total, producto) => {
    return total + producto.precio
}, 0)

//Filter
resultado = carrito.filter(producto=> {
    return producto.precio > 400
});

console.log(resultado);