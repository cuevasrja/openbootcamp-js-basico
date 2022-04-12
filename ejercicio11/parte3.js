/* 
    Como último ejercicio, tendréis que crear un método calcularArea() en la clase Figura que devuelva el valor -1 para indicar que nuestra figura genérica no tiene área.

    Implementa ese mismo método en las clases Circulo y Rectángulo que devuelvan el área de la figura en base a sus atributos.

    Para calcular el área del círculo, PI puede ser 3.14 simplemente, sin más decimales.
*/

class Figura {
    constructor(c){
        this._color = c;
    }
    get getColor(){
        console.log(`El color es ${this._color}`);
        return this._color
    }
    set setColor(c){
        this._color = c;
    }
}

class Circulo extends Figura{
    constructor(r, c){
        super(c);
        this._radio = r;
    }
    getArea(){
        const radioCheck = typeof this._radio === 'number' && this._radio != false ? true : false
        if(radioCheck){
            const area = Math.round(Math.PI * (this._radio**2) *100)/100 ;
            console.log(`El area es ${area}`);
            return area
        }
        else{
            console.log('El radio no esta definido correctamente');
            return -1
        }
    }
    get getRadio(){
        console.log(`El radio es: ${this._radio} cm`);
        return this._radio;
    }
    set setRadio(r){
        this._radio = r;
    }
}

const circulo = new Circulo(5, 'Azul');

circulo.getArea();
circulo.getRadio
circulo.getColor

circulo.setColor = 'Rojo';
circulo.setRadio = 0;
circulo.getColor
circulo.getArea();

class Rectangulo extends Figura{
    constructor(b, h, c){
        super(c);
        this._base = b;
        this._altura = h
    }
    getArea(){
        const baseCheck = typeof this._base === 'number' && this._base != false ? true : false;
        const alturaCheck = typeof this._altura === 'number' && this._altura != false ? true : false;
        if(baseCheck && alturaCheck){
            const area = this._altura * this._base;
            console.log(`El area es ${area}`);
            return area
        } else{
            console.log('El area y/o base no estan definidos correctamente');
            return -1
        }
    }
    get getBase(){
        console.log(`La base es: ${this._base} cm`);
        return this._base;
    }
    get getAltura(){
        console.log(`La altura es: ${this._altura} cm`);
        return this._altura;
    }
    set setBase(b){
        this._base = b;
    }
    set setAltura(h){
        this._altura = h;
    }
}

const rectangulo = new Rectangulo(2, 0, 'Verde');

rectangulo.getArea();
rectangulo.getAltura
rectangulo.getBase
rectangulo.getColor

rectangulo.setColor = 'Morado';
rectangulo.setBase = 1;
rectangulo.setAltura = 7;

rectangulo.getArea();
rectangulo.getColor