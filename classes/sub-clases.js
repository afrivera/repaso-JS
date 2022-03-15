

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

class Heroe extends Persona {

    clan = 'sin clan';

    constructor( nombre, codigo, frase ) {
        super(nombre, codigo, frase);//siempre se llama primero el super antes de cualquier propiedad
        this.clan = 'Los Avengers'
    }

    quiensoy() {//sobreescribe metodos
        console.log(`Soy ${this.nombre}, ${this.clan} `)
        super.quiensoy();//llamar metodo del super
    }

}

// const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');
const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman', 'avengers');

console.log(spiderman)
spiderman.quiensoy();