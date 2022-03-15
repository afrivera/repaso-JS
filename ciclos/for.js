

const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];

console.warn('For Tradicional');
//sintaxis basica del for
for( let i = 0 ; i<heroes.length ; i++ ) {
    console.log(heroes[i]);
}

console.warn('For in');

for( let i in heroes){
    console.log(heroes[i]);
}

console.warn('for of');
for(let heroe of heroes){
    console.log(heroe);
}