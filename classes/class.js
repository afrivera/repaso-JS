

class Persona {
    
    //propiedades, get, metodos estaticos
    static _conteo = 0;
    static get conteo(){
        return Persona._conteo + ' instancias';
    }
    
    static mensaje() {
        console.log( this.nombre ); //undefined ya que no está instanciada la clase
        console.log('Hola soy un metodo estatico');
    }
    
    
    //propiedades o atributos
    //por defecto todas las clases tiene el use strict
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';//se suele usar asi _comida

    //constructor
    constructor( nombre = 'sin Nombre', codigo = 'sin código', frase = 'sin frase') {
        // console.log('Hola!');
        if( !nombre ) throw Error('el nombre es obligatorio')
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        
        Persona._conteo++;
        
    }

    //set y get
    set setComidaFavorita( comida ) {//solo se recibe un argumento
        this.comida =  comida.toUpperCase();
    }

    get getComidaFavorita( ){
        return `la comida favorita de ${this.nombre} es ${this.comida}`;
    }

    //metodos
    quiensoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${ this.codigo}`)
    }

    miFrase () {
        this.quiensoy();
        console.log(`${this.frase}`)
    }


}

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');
const ironman = new Persona('Tony Start', 'Ironman', 'Yo soy Ironman');
// console.log(ironman);

// spiderman.quiensoy();
// ironman.quiensoy();
spiderman.miFrase();
spiderman.setComidaFavorita = 'El pie de cereza de la tía may'; //no se pone entre parentesis para asignar
//evitar putada
spiderman.nemesis = 'Duende Verde';

// console.log(spiderman.getComidaFavorita);
// console.log(spiderman);
// Persona._conteo = 2;
console.log('conte estatico', Persona._conteo )
console.log( Persona.conteo);
Persona.mensaje();

//
Persona.propiedadExterna = 'Hola Mundo';

console.log(Persona.propiedadExterna);
console.log(Persona)
