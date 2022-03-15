

const regresaTrue = ()=> {
    console.log('regresa tru');
    return true;
}

const regresaFalse = () => {
    console.log('regresa false');
    return false;
}

console.warn('Not o la negacion');
console.log(true);
console.log(!true);
console.log(!!false);

console.log( !regresaTrue());

console.warn('And');
console.log(true && true);
console.log(true && !false);

console.warn('==&&==');

console.log(!regresaFalse() && regresaTrue());

console.warn('Or ||');

console.log(false || true);
console.log(false || false);
console.log(!regresaFalse() || regresaTrue());

//
console.warn('asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyfalse= false;

const a1 = true && 'Hola Mundo' && 150;//toma el último valor
const a2 = 'Hola' && 'Mundo';
const a3 = soyfalse || 'Ya no soy falso';
const a4 = soyfalse || soyNull || soyUndefined || 'Ya no soy falso'|| true;
const a5 = soyfalse || regresaTrue() || soyUndefined || 'Ya no soy falso'|| true;

console.log({a1, a2, a3, a4, a5});

if( true || true || true || false){
    console.log('hacer algo');
}else{
    console.log('hacer otra cosa');
}