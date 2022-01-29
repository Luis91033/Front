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
// console.log(1);

// window.addEventListener('load', function() {  // load espera a que JS y los archivos que depende del HTML estén listos
//     console.log(2);
// })

// window.onload = ( function() {
//     console.log(3);
// })

// document.addEventListener('DOMContentLoaded',function(){ // Solo espera por el HTML, pero no espera CSS o imágenes
//     console.log(4);
// })

// console.log(5);


// Seleccionar elementos y asociarles un evento

// const btn = document.querySelector('.boton--primario');
// btn.addEventListener('click', function(evento) {
//     console.log(evento);
//     evento.preventDefault();


//     //Validar formulario

    
//     console.log('enviando formulario');
// })



// Eventos de los Inputs y los Textarea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leer);

email.addEventListener('input', leer);

mensaje.addEventListener('input',leer);

// El evento de Submit
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    // Validar el formulario

    const { nombre, email, mensaje } = datos;

    if(nombre === ' ' || email === ' ' || mensaje === ' '){

        mostrarAlerta('Todos los campos son obligatorios', 'error')
        return; //Corta la ejecución del código
    }

    // Crear otra alerta
    mostrarAlerta('Mensaje enviado correctamente');

    
    // Enviar el formulario
    console.log('Enviando Formulario');
})

function leer(e){
    //console.log(e.target.value);

    datos[e.target.id] = e.target.id;

    console.log(datos);
}

// Muestra un error en pantalla
function mostrarError(mensaje) {
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');

    formulario.appendChild(error);

    // Desaparezca después de 5 segundos

    setTimeout(() => { 
        error.remove();
    },5000)
}

// Muestra un error en pantalla
function mostrarMensaje(mensaje) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    alerta.classList.add('correcto');

    formulario.appendChild(alerta);

    // Desaparezca después de 5 segundos

    setTimeout(() => { 
        alerta.remove();
    },5000)
}

function mostrarAlerta(mensaje, error = null ){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    
    if(error){
        alerta.classList.add('error');
    }else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);
    
    // desaparezca después de 5 segundos
    setTimeout(() => { 
        alerta.remove();
    },5000)
}

