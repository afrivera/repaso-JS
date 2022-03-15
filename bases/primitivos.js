

let nombre = 'Peter Parker';

console.log(nombre);
//no es posible redeclarar variables con let
nombre = 'Ben Parker';
console.log(nombre);

nombre = "Tia May";
nombre = `Tia May`;

console.log(typeof nombre);

nombre = 123;
console.log(typeof nombre);


let esMarvel = true;
console.log(typeof esMarvel);

let edad = 33.04040;
console.log(typeof edad);

let superPoder;

console.log(typeof superPoder)//sale undefined

let soyNull = null;
console.log(soyNull);

let symbol1 = Symbol('a');
let symbol2 = Symbol('a');

console.log(typeof symbol1);

console.log(symbol1 === symbol2);