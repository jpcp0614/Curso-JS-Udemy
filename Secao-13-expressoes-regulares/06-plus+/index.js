/*

TODO Operador plus +

* Quando um * está após alguma expressão, este elemento pode se repetir mais de uma vez

*/

const umOuMaisNumeros = /\d+/;

console.log(umOuMaisNumeros.test('1')); // true
console.log(umOuMaisNumeros.test('1,2,3')); // true
console.log(umOuMaisNumeros.test('1 fg')); // true
console.log(umOuMaisNumeros.test('asdgdrtg')); // false