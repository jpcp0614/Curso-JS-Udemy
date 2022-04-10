/*

TODO Override

* Sempre que adicionamos uma propriedade a um objeto, é criada uma idêntica no prototype

* Podemos substituir a do prototype

*/

class Cachorro {
  //* atributos privados
  constructor(raca, cor) {
    this.raca = raca;
    this.patas = 4;
    this.cor = cor;
  }

  latir() {
    console.log('Au au');
  }

}

let labrador = new Cachorro('Labrador', 'branco');
console.log(labrador);
labrador.latir();

console.log(labrador.raca); // método

// console.log(labrador.#raca); // não dá pra acessar

console.log(Cachorro.prototype.cor = 'preto');
