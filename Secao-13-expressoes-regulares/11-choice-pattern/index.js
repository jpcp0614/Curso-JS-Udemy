/*

TODO Choice Pattern

* Podemos colocar uma instrução na regex que funciona como um || (ou) das condicionais -> pipe (|)

*/

let frutas = /\w+: (Matheus|João|Maria)/; // Nome: nome

console.log(frutas.test('Nome: Matheus')); // true
console.log(frutas.test('Nome: João')); // true
console.log(frutas.test('Nome: Paulo')); // false
