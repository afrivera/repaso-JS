

class Persona {

    //protip
    static porObjeto( {nombre, apellido, pais}) {
        return new Persona( nombre, apellido, pais );
    }

    constructor( nombre, apellido, pais) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;

    }

    getInfo() {
        console.log(`info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }
}

const nombre1 = 'Andrea',
      apellido1 = 'Muelas',
      pais1 = 'Colombia';

const andres = {
    nombre: 'Andres',
    apellido: 'Rivera',
    pais: 'Colombia'
}

const persona1 = new Persona( nombre1, apellido1, pais1);

//usar el metodo estatico
const persona2 = Persona.porObjeto( andres );

persona1.getInfo();
persona2.getInfo();



