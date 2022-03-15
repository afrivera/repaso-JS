//instancia unica de una clase

class Singleton {

    static instancia; //undefined
    nombre = '';

    constructor (nombre = '') {

        // const a = undefined;
        // console.log(a); // undefined
        // console.log(!a); // true
        // console.log(!!a); // false

        if( !!Singleton.instancia) {
            return Singleton.instancia;
        }

        Singleton.instancia = this;//this hace referencia a la instancia
        this.nombre = nombre;
    }

}

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('BlackPanther');

console.log(`nombre en la instancia1 es: ${instancia1.nombre}`);
console.log(`nombre en la instancia1 es: ${instancia2.nombre}`);
console.log(`nombre en la instancia1 es: ${instancia3.nombre}`);