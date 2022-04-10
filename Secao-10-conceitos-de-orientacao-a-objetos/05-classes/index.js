/*

TODO Class Definition

* O prototype do JS pode ser chamado de class

* Em outras linguagens, uma class é um molde para criar objetos

* Podemos criar vários objetos a partir de uma class (em cima de um prototype)

*/

let cachorro = {
  patas: 4,
  raca: 'SRD',
  latir: function() {
    console.log('Au au');
  }
}

let labrador = Object.create(cachorro);

labrador.raca = 'Labrador';
labrador.latir();

console.log(labrador);