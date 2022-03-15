

function crearPersona( nombre, apellido){
    return {
        nombre,
        apellido
    }
}

//cuando se encierra entre parentesis es decir que se devuelve un objeto
const crearPersona2 = (nombre, apellido) => ({nombre, apellido})

const persona = crearPersona2('Andres', 'Rivera');
console.log(persona);

function imprimeArgumentos (){
    console.log(arguments);
}

//las funciones de flecha no reciben los arguments
const imprimeArgumentos2 = ( ...arguments) =>{//parametro res no puede haber algo despues
    // console.log(arguments)
    return arguments
}
// const argumentos = imprimeArgumentos2(10, true, 'Andres', false);
const [edad, casado, nombre] = imprimeArgumentos2(10, true, 'Andres', false);
console.log({edad, casado, nombre});

const { apellido:nuevoApellido } = crearPersona2('Andres', 'Rivera');
console.log(nuevoApellido);

//destructurar argumentos
const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

const imprimePropiedades = ( {nombre, codeName, vivo}) =>{
    console.log('nombre', nombre);
    console.log('codeName', codeName);
    console.log('vivo', vivo);
};

imprimePropiedades(tony);