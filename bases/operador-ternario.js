/**
 * Dias de semana abrimos a las 11,
 * pero los fines de semana abrimos a las 9 
*/
//entra a un sitio web, para consultar si está abierto hoy....
const dia = 6;//0: domingo.... 1: lunes....
const horaActual = 11;

let horaApertura;
let mensaje; //está abierto, esta cerrado hoy abrimos a las xx

// if( dia === 0 || dia === 6 ){
// if ( [0,6].includes(dia)){
//     console.log('fin de semana');
//     horaApertura = 9;
// }else{
//     console.log('dia de semana');
//     horaApertura= 11;
// }

horaApertura = ( [0,6].includes(dia) ) ? 9 : 11;

// if( horaActual >= horaApertura ){
//     mensaje= 'Está Abierto';
// }else{
//     mensaje = `Está cerrado, hoy abrimos a las ${ horaApertura }`;
// }
mensaje = ( horaActual >= horaApertura ) ? 'Está Abierto' : `Está cerrado, hoy abrimos a las ${ horaApertura }`;

console.log({horaApertura, mensaje});
