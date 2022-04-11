/*

TODO Método exec

* Retorna um objeto com algumas informações sobre regex

* Se nada for encontrado, retorna null

*/

const digitos = /\d+/;

console.log(digitos.exec('1a2b3c4d5e'));
console.log(digitos.exec('abcdef'));
console.log(digitos.exec('12345'));