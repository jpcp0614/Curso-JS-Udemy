/*

TODO constructor com método

* Além de propriedades, podemos criar a classe base já com Métodos

* Basta definir ao prototype o método desejado

*/

//* Classe somente com os atributos
function Cachorro(raca, patas, cor) {
  this.raca = raca;
  this.patas = patas;
  this.cor = cor;
}

//* Métodos separados, para melhor organização
Cachorro.prototype.latir = function() {
  console.log('Au au');
}

let foxPaulistinha = new Cachorro('Fox Paulistinha', 4, 'preto');
console.log(foxPaulistinha);
foxPaulistinha.latir();
