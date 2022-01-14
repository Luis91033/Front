//function sumar(n1,n2) {
//    return n1 + n2;
//}
//const resultado = sumar(2, 3);

//console.log(resultado);

let total = 0;

function agregarcarrito(precio) {
    return total += precio;
}

function calcularimpuesto(total) {
    return 1.15 * total;
}

total = agregarcarrito(200);
total = agregarcarrito(400);
total = agregarcarrito(600);

console.log(total);

const totalapagar = calcularimpuesto(total);

console.log(totalapagar);