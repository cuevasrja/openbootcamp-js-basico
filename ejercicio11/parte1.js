/*
En este ejercicio tendréis que crearla clase figura que tiene que tener como atributo _color

El constructor de Figura debe recibir como parámetro el valor del color y almacenarlo en _color.

Ya que la variable _color es privada, tenéis que crear un getter getColor() y un setter setColor(String).
*/

class Figura {
    #_color
    constructor(c){
        this.#_color = c;
        console.log(this.#_color);
    }
    get getColor(){
        console.log(`El color es ${this.#_color}`);
    }
    set setColor(c){
        this.#_color = c;
    }
}

const figura = new Figura('Rojo');

figura.getColor;

figura.setColor = 'Azul';

figura.getColor;