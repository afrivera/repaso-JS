
let a = 1;

if( a >= 10){//undefined, null, una asignación
    console.log('a es mayor o igual a 10');
}else{
    console.log('a es menor que 10');
}

// console.log('fin del programa');

const hoy = new Date();
let dia = hoy.getDay();
console.log({dia});

if( dia === 0){
    console.log('Domingo')
}else if (dia ===1){
    console.log('lunes');
}else if ( dia === 2){
    console.log('martes')
}

const diaSemana = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado',
}
console.log(diaSemana[7] || 'día no existe');