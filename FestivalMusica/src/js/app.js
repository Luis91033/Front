document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});

function iniciarApp() {
    navegacionfija();
    crearGaleria();
    scrollNav();
}

function navegacionfija(){
    const barra = document.querySelector('.header');
    const sobrefestival = document.querySelector('.sobre-festival');
    const body = document.querySelector('body');

    window.addEventListener('scroll', function() {

        if(sobrefestival.getBoundingClientRect().bottom < 0) {
            barra.classList.add('fijo');
            body.classList.add('body-scroll');
        } else {
            barra.classList.remove('fijo');
            body.classList.remove('body-scroll');
        }
    });
}

function scrollNav() {
    const enlaces = document.querySelectorAll('.navegacion-principal a');
    enlaces.forEach( enlace => {
        enlaces.addEventListener('click', function(e){
            e.preventDefault();

            const seccionscroll = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionscroll);
            seccion.scrollIntoView({ behavior:"smooth"});

        });
    });
}
function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes')

    for(let i = 1; i <= 12; i++){
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
        <source srcset="build/img/grande/${i}.avif" type="image/avif"> 
        <source srcset="build/img/grande/${i}.webp" type="image/wepb"> 
        <img src="build/img/grande/${i}.jpg" alt="imagen_galeria">
        `;

        imagen.onclick = function(){
            mostrarImagen(i);
        }

        galeria.appendChild(imagen);
    }
}

function mostrarImagen(id){
    const imagen = document.createElement('picture');
    imagen.innerHTML = `
    <source srcset="build/img/thumb/${id}.avif" type="image/avif"> 
    <source srcset="build/img/thumb/${id}.webp" type="image/wepb"> 
    <img src="build/img/thumb/${id}.jpg" alt="imagen_galeria">
    `;

    //Crea el Overlay con la imagen
    const overlay = document.createElement('div');
    overlay.appendChild (imagen);
    overlay.classList.add('overlay');
    overlay.onclick = function(){
        const body = document.querySelector('body');
        body.classList.remove('fijar-body');
        overlay.remove();
    }

    //Boton para cerrar el Modal
    const cerrar = document.createElement('p');
    cerrar.textContent = 'X';
    cerrar.classList.add('btn-c');

    cerrar.onclick = function(){
        const body = document.querySelector('body');
        body.classList.remove('fijar-body');
        overlay.remove();
    }

    overlay.appendChild(cerrar);


    //Añadirlo al HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');

}