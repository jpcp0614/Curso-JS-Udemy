/*

TODO Instanciar por função

* Construtores: são formas(métodos) de instanciar uma classe em um linguagem de programação

* Instanciar = criar um objeto novo a partir de um modelo (classe)

* No constructor podemos definir propriedades (atributos) e métodos (funções)

*/

function criarCachorro1(raca, patas, cor) { // constructor
  return {
    raca,
    patas,
    cor,
  };
}

let doberman = criarCachorro1('Doberman', 4, 'preto');
let labrador = criarCachorro1('Labrador', 4, 'branco');

console.log(doberman);
console.log(labrador);

function criarCachorro2(raca, patas, cor) { // constructor
  let cachorro = Object.create({});
  cachorro.raca = raca;
  cachorro.patas = patas;
  cachorro.cor = cor;
  return cachorro;
}

let foxPaulistinha = criarCachorro2('Fox Paulistinha', 4, 'preto');
let schnauzer = criarCachorro2('Schnauzer', 4, 'branco');

console.log(foxPaulistinha);
console.log(schnauzer);