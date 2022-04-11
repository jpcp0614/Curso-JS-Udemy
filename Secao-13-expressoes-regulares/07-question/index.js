/*

TODO Operador question ?

* Faz com que o dígito anterior a ele seja opcional

*/

const reg1 = /Abacax?i/;

console.log('---------reg2---------');
console.log(reg1.test('Abacaxi')); // true
console.log(reg1.test('Abacaxii')); // true
console.log(reg1.test('Abacai')); // true
console.log(reg1.test('Abacax')); // false
console.log('----------------------\n');

const reg2 = /\d+\w?\s?/;

console.log('---------reg2---------');
console.log(reg2.test('123')); // true
console.log(reg2.test('123a')); // true
console.log(reg2.test('123 abc')); // true
console.log(reg2.test('123abc')); // true
console.log(reg2.test('abc')); // false
console.log('----------------------\n');