//Arreglos o Arrays

const numeros = [10,20,30,40,50];
console.table(numeros);

const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo'];
console.table(meses);

//Acceder a los valores d eun arreglo
//console.log(numeros[4]);

//Conocer la extensión de un arreglo
//console.log(meses.length);

numeros.push(60); //Al final del arreglo
numeros.unshift(-10,-20,-30); //Al inicio del arreglo

//meses.pop(); //Elimina el último elemento del arreglo
//meses.shift(); //Elimina el primer elemento del arreglo

meses.splice(2, 1);

console.table(meses);

console.table(numeros);

//Rest Operator o Spread Operator

const nuevoArreglo = [...meses , 'junio'];
console.table(nuevoArreglo);
