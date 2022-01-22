// Promises

const usuarioAutenticado = new Promise( () => {
    const auth = true;

    if(auth) {
        resolve('Usuario Autenticado'); //El PROMISE se cumple
    } else {
        reject('No se pudo iniciar sesión'); //El PROMISE no se cumple
    }
});

usuarioAutenticado
    .then( function (resultado) {
        console.log(resultado);
    })

//En los promises existen 3 valores posibles
//Pending : No se ha cumplido pero tampoco se ha rechazado
//Fulfilled : Ya se cumplió
// Rejected : Se ha rechazado o no se pudo cumplir