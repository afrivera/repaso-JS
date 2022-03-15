
let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];

console.log('Largo:', juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

console.log({primero, ultimo});

//metodo para recorrer arreglo
juegos.forEach( ( juego, indice, arr ) => {
    console.log({juego, indice, arr})
} );

//insertar elemento en arreglo
let nuevaLongitud = juegos.push( 'F-Zero' );

console.log({nuevaLongitud, juegos})

//insertar elementos al inicio del arreglo
nuevaLongitud = juegos.unshift('Fire Emblem');

console.log({nuevaLongitud, juegos})

//borrar un elemento en un arreglo = borra el último
let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos})

//borrar elemento enviando indice
let pos = 1
let juegosBorrados = juegos.splice(pos, 2);

console.log({juegosBorrados, juegos});

//saber la pos indice de un elemento
let metroidIndex = juegos.indexOf('metroid');//si aparece -1 es que no lo encontro
console.log({metroidIndex});

//TODO: referencia


