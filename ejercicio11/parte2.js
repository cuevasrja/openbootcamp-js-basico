/*
    En este segundo ejercicio tendréis que crear dos clases:

    - Circulo
    - Rectángulo

    las cuales deben de heredar de Figura.

    Circulo debe recibir dos parámetros en el constructor: radio (number) y color (String).

    Rectángulo debe recibir tres parámetros en el constructor: base (number), altura (number) y color (String).

    Los atributos de estas clases deben ser públicos.
*/

class Figura {
    #_color
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
        const area = Math.round(Math.PI * (this._radio**2) *100)/100 ;
        console.log(`El area es ${area}`);
        return area
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
circulo.setRadio = 10;
circulo.getColor
circulo.getArea();

class Rectangulo extends Figura{
    constructor(b, h, c){
        super(c);
        this._base = b;
        this._altura = h
    }
    getArea(){
        const area = this._altura * this._base;
        console.log(`El area es ${area}`);
        return area
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

const rectangulo = new Rectangulo(2, 3, 'Verde');

rectangulo.getArea();
rectangulo.getAltura
rectangulo.getBase
rectangulo.getColor

rectangulo.setColor = 'Morado';
rectangulo.setBase = 1;
rectangulo.setAltura = 7;

rectangulo.getArea();
rectangulo.getColor