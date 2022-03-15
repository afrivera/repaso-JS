
function saludar(nombre = '') { //no se recomienda
    console.log(arguments)//no lo soporta las arrow functions
    console.log(`Hola ${nombre}`);
    return 1;//si la función no retorna nada es undefined
}

// const saludar2 = function(nombre) { // se conoce como función anonima
//     console.log('Hola Mundo' + nombre)
// }

//arrow functions === lambda function

const saludarFlecha = (nombre) => {
    console.log('Hola Flecha' + nombre );
}



// saludar('Andres', 40, true, 'lalala');
// const retornoSaludar = saludar('Andres', 40, true, 'lalala');
// console.log({retornoSaludar})
// saludar2('Felipe');
// saludarFlecha('Juan');

function sumar( a, b ){
    return a + b;
}
// const sumar2 = ( a, b ) =>{
//     return a + b;
// }

//resumir lo de arriba
const sumar2 = ( a, b ) => a + b ;

function getAleatorio (){
    return Math.random();
}

//función de flecha
const getAleatorio2 = ()=> Math.random()

console.log( getAleatorio2());