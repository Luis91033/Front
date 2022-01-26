// querySelector
const heading = document.querySelector('.header__texto h2') // Retorna 0 o 1 elemento
console.log(heading);


// querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces);


// getElementById
const heading2 = document.getElementById('heading');
console.log(heading2);

// Generar un nuevo enlace
const nuevoenlace = document.createElement('A')

// Agregar el href
nuevoenlace.href = 'nuevo-enlaces.html';

// Agregar el texto
nuevoenlace.textContent = 'Un nuevo Enlace';

// Agregar la clase
nuevoenlace.classList.add('navegacion_enlace');

// Agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoenlace);   // appendChild sirve para agregar como hijo 

console.log(nuevoenlace);


// Eventos
console.log(1);

window.addEventListener('load', function() {  // load espera a que JS y los archivos que depende del HTML estén listos
    console.log(2);
})

window.onload = ( function() {
    console.log(3);
})

document.addEventListener('DOMContentLoaded',function(){ // Solo espera por el HTML, pero no espera CSS o imágenes
    console.log(4);
})

console.log(5);


// Seleccionar elementos y asociarles un evento

const btn = document.querySelector('.boton--primario');
btn.addEventListener('click', function(evento) {
    console.log(evento);
    evento.preventDefault();


    //Validar formulario

    
    console.log('enviando formulario');
})
