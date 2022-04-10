/*

TODO Override

* Sempre que adicionamos uma propriedade a um objeto, é criada uma idêntica no prototype

* Podemos substituir a do prototype

*/

class Cachorro {
  //* atributos privados
  #raca;
  #patas;

  constructor(raca, patas, cor) {
    this.#raca = raca;
    this.#patas = patas;
    this.cor = cor;
  }

  latir() {
    console.log('Au au');
  }

  get raca() { return this.#raca; }

  get patas() { this.#patas; }

}

let labrador = new Cachorro('Labrador', 4, 'branco');
console.log(labrador);
labrador.latir();

console.log(labrador.raca); // método

// console.log(labrador.#raca); // não dá pra acessar

console.log(Cachorro.prototype.cor = 'preto');
