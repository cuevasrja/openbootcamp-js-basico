function Coche(peso, potencia, marca) {
    this.peso = peso;
    this.potencia = potencia;
    this.marca = marca;
    console.log(`El vehiculo pesa ${peso} kg. Tiene ${potencia} caballos de potencia y es de la marca ${marca}`);
}

let coche = new Coche(300, 150, "Ferrari");

module.export = {Coche};
