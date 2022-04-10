/*

TODO Getters e Setters

* Get: resgatar valor

* Set: definir valor

*/

class Cachorro {
  constructor(raca, cor) {
    this.raca = raca;
    this.cor = cor;
  }

  get racaCachorro() { return this.raca; }

  set racaCachorro(value) { this.raca = value; }

  get corCachorro() { return this.cor; }

  set corCachorro(valor) { this.cor = valor; }

}

let fox = new Cachorro('Fox Terrier', 'preto');
console.log(fox.corCachorro);

fox.corCachorro = 'branco';
console.log(fox);