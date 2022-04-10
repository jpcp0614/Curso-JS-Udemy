/*

TODO Instanciar por new

*/

function Cachorro(raca, patas, cor) {
  this.raca = raca;
  this.patas = patas;
  this.cor = cor;
  this.latir = function() {
    console.log('Au au');
  }
}

let foxPaulistinha = new Cachorro('Fox Paulistinha', 4, 'preto');
console.log(foxPaulistinha);
foxPaulistinha.latir();