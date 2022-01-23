function empleados(){

    const archivo = 'empleados.json';

    // fetch(archivo)
    //     .then(resultado => {
    //         return resultado.json();
    //     })
    //     .then(datos => {
    //         const {empleados} = datos;

    //         empleados.forEach( (empleado) => {
    //             console.log(empleado);
         
    //         });
    //     })

    const resultado = await fetch(archivo);
    const datos = await
}
empleados();