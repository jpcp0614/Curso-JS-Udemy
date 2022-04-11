/*

TODO Método match

* Funciona de forma similar ao exec

*/

const digitos = /\d+/;

console.log(digitos.exec('1a2b3c4d5e'));
console.log(digitos.exec('abcdef'));
console.log(digitos.exec('12345'));

const frase = 'Frase que faz um teste do 100'.match(/\d+/);
console.log(frase);