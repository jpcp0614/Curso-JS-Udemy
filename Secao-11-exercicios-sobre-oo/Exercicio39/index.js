class Carro {
  constructor(marca, cor, gasolina) {
    this.marca = marca;
    this.cor = cor;
    this.gasolina = gasolina;
  }

  getMarca() { return this.marca; }

  getCor() { return this.cor; }

  getGasolina() { return this.gasolina; }

  dirigirCarro() {
    this.gasolina -= 1;
    return `O carro ${this.marca} está em movimento. Gasolina: ${this.gasolina}L`;
  }

  abastecerCarro(litros) {
    this.gasolina += litros;
    return `O carro ${this.marca} foi abastecido com ${litros} litros. Gasolina: ${this.gasolina}L`;
  }
}

const carro = new Carro('BMW', 'Azul', 50);
console.log(carro);
carro.dirigirCarro();
carro.dirigirCarro();
carro.dirigirCarro();
carro.dirigirCarro();
carro.dirigirCarro();
carro.dirigirCarro();
carro.dirigirCarro();
console.log(carro.dirigirCarro());