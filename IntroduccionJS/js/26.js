// This

const reservación = {
    nombre: 'Eduardo',
    apellido: 'Corral',
    total: 5000,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
}
reservación.informacion();