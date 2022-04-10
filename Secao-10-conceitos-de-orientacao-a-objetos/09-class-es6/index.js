/*

TODO class e constructor com ES6

* Além de propriedades, podemos criar a classe base já com Métodos

* Basta definir ao prototype o método desejado

*/

class Cachorro {
  //* atributos privados
  #raca;
  #patas;
  #cor;

  constructor(raca, patas, cor) {
    this.#raca = raca;
    this.#patas = patas;
    this.#cor = cor;
  }

  latir() {
    console.log('Au au');
  }

  get raca() { return this.#raca; }

  get patas() { this.#patas; }

  get cor() { return this.#cor; }
}

let labrador = new Cachorro('Labrador', 4, 'branco');
console.log(labrador);
labrador.latir();

console.log(labrador.raca); // método

// console.log(labrador.#raca); // não dá pra acessar