const sumar = (a,b) =>{
  const c = a + b;
  console.log(`El resultado de sumar ${a} + ${b} = ${c}`);
  return c
}

const restar = (a, b) =>{
  const c = a - b;
  console.log(`El resultado de restar ${a} - ${b} = ${c}`);
  return c
}

const multiplicar = (a, b) =>{
  const c = a*b;
  console.log(`El resultado de multiplicar ${a}*${b} = ${c}`);
  return c
}

const dividir = (a, b) =>{
  if (b === 0) {
    console.log('No se puede dividir entre 0');
    return null
  }
  const c = a/b;
  console.log(`El resultado de dividir ${a}/${b} = ${c}`);
  return c
}

const resultado1 = sumar(5, 3);
const resultado2 = restar(10, 7);
const resultado3 = multiplicar(2, 5);
const resultado4 = dividir(10, 0);
const resultado5 = dividir(8, 2)
