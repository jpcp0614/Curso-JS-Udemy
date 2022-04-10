/*

TODO Symbol

* Propriedades únicas que não podem ser alteradas e nem criadas duas vezes

* Podemos utilizar como uma constante, só que para a propriedade de objeto

*/

class Cachorro {
  constructor(raca, cor) {
    this.raca = raca;
    this.cor = cor;
  }

  latir() {
    console.log('Au au');
  }

}

let patas = Symbol()
Cachorro.prototype[patas] = 4;

let labrador = new Cachorro('Labrador', 'branco');

console.log(Cachorro.prototype[patas]);
console.log(labrador[patas]);