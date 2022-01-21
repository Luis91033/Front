// For Loop

//for(let i = 0; i < 10; i++ ) {
//    console.log(i);
//}

// for(let i = 0; i <= 10; i++ ) {
//      if(i % 2 === 0){
//          console.log(`El numero ${i} es Par`);
//      } else {
//          console.log(`El numero ${i} es Impar`);
//      }
// }

const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Televisión 50 pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audífonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
];

for(let i = 0; i < carrito.length; i++) {
    console.log(carrito[i]);
}

// While Loop

let i = 0; // índice

while(i < 10) { // Condición

    if( i % 2 === 0) {
        console.log(`El numero ${i} es Par`);
    }
    i++;
}   

//