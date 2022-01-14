//Declaración de función

function sumar(numero1 = 0, numero2 = 0) {// numero1, y numero2 son parámetros
    console.log(numero1 + numero2)
}

sumar(10, 10);// Argumentos o valores reales

//Expresión de la función
const sumar2 = function(n1, n2) {
    console.log(n1 + n2);
}
sumar2(5, 10);