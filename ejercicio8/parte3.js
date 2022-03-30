const eliminarUltimo = (array) =>{
  if (Array.isArray(array) && array.length > 1) {
    array.pop();
    const newArray = array;
    console.log(newArray);
    return newArray
  } else {
    return console.log('El elemento no cumple los requisitos');
  }
}

const array1 = [1, 2, 3, 4, 5];

const resultado1 = eliminarUltimo(array1);
const resultado2 = eliminarUltimo(resultado1);

const resultado3 = eliminarUltimo([5])
