function sumar(a, b)
{
  try {
      if(typeof(a) !== 'number' || typeof(b) !== 'number')    
        throw new Error(`Los valores introducido no son número, ${typeof(a)}: ${a}, ${typeof(b)}: ${b}`);
      return `El resultado de sumar ${a} + ${b} es: ${a + b}`;
  } catch(e) {
      return e;
  }
}

console.log(sumar(1, [true]));

console.log(sumar("juan", 8));

console.log(sumar(7, 5));

console.log(sumar(8.2, 2.8));
