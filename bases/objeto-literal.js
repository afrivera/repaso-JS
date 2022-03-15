let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords:{
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California',
    },
    'ultima-pelicula': 'Infinity War', //puede guardar con caracteres y/o espacios
};
console.log(personaje)

console.log('Nombre:', personaje['nombre']);
console.log('edad', personaje['edad']);
console.log('Coors', personaje.coords);
console.log('Lat', personaje.coords.lat);


console.log('No. trajes', personaje.trajes.length);
console.log('Ultimo traje', personaje.trajes[ personaje.trajes.length - 1 ])

const x = 'vivo';

console.log('Vivo', personaje[x]);
console.log('Última película', personaje['ultima-pelicula']);


//más detalles

//eliminar propiedades
delete personaje.edad;
console.log(personaje)

//crear nueva propiedad
personaje.casado = true



//pares de valores
const entriesPares = Object.entries( personaje );

console.log(entriesPares)

//para bloquear propiedades de un objeto, pero no bloquea los objetos dentro de las llaves
Object.freeze( personaje );

personaje.dinero = 100000000000;
console.log(personaje);


//listar las propiedades del objeto
const propiedades = Object.getOwnPropertyNames( personaje );
const values = Object.values( personaje );
console.log(propiedades);
console.log(values);
