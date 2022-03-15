
let a = 10;
let b = a;
a = 30;
//... separa los elementos spread, y res une todos los elementos y transforma en arreglo

console.log({a,b});

let juan = {nombre: 'Juan'};
let ana = { ...juan};//para establecer objetos
ana.nombre = 'ana';

console.log({juan, ana});

const cambiarNombre = ( {...persona} ) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre: 'Peter'};

let tony = cambiarNombre( peter );

console.log({peter, tony});

//arreglos
const frutas = ['manzana', 'pera', 'piña'];

// const otrasFrutas = [...frutas];
console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');


otrasFrutas.push('Mango');

console.table( { frutas, otrasFrutas});