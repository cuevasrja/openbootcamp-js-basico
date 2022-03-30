function Coche(peso, potencia, marca){
    this._peso = peso;
    this._potencia = potencia;
    this._marca = marca 
    console.log(`El vehiculo pesa ${peso} kg. Tiene ${potencia} caballos de potencia y es de la marca ${marca}`);

    this.getPeso = function() {
        return this._peso;
    }
    this.setPeso = function(peso) {
        this._peso = peso;
    }
    this.getPotencia = function() {
        return this._potencia;
    }
    this.setPotencia = function(potencia) {
        this._potencia = potencia
    }
    this.getMarca = function() {
        return this._marca;
    }
    this.setMarca = function(marca) {
        this._marca = marca;
    }
}

let coche = new Coche(400, 150, "Ferrari");

coche.setPotencia(300);
console.log(coche.getPotencia());

module.export = {Coche}
