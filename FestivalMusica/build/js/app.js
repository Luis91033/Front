document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});

function iniciarApp() {
    crearGaleria();
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