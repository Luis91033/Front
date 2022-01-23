//Async / await


function descargar() {
    return new  Promise(resolve => {
        console.log('Descargando clientes...espere....');

        setTimeout( () => {
            resolve('Los clientes fueron descargados');
        }, 5000);

    })
}

function descargar2() {
    return new  Promise(resolve => {
        console.log('Descargando pedidos...espere....');

        setTimeout( () => {
            resolve('Los pedidos fueron descargados');
        }, 3000);

    })
}

async function app(){
    try {
        // const resultado = await descargar();
        // console.log(resultado);
    const resultado = await Promise.all([descargar(), descargar2()]);
    } catch (error) {
        console.log(error);
    }
}

app();

