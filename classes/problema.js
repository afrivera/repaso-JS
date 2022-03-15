

const andres = {
    nombre: 'Andres',
    edad: 31,
    imprimir(){
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad}`)
    }
}

const juan = {
    nombre: 'Juan',
    edad: 8
}

// andres.imprimir();

//esto se debe crear con la palabra new
function Persona( nombre, edad ) {
    console.log('Se ejecuto esta linea');

    this.nombre = nombre;
    this.edad   = edad;

    this.imprimir = function(){
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad}`)
    }
}

const maria = new Persona('maria', 20);
const pedro = new Persona('Pedro', 30);
console.log(maria);
maria.imprimir();
pedro.imprimir();