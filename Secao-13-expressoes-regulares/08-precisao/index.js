/*

TODO Operador de precisão

* Inserir o número de ocorrências entre {};

*/

const cep = /\d{5}-\d{3}/;

console.log('---------cep---------');
console.log(cep.test('10021-100')); // true
console.log(cep.test('100210100')); // false
console.log(cep.test('25417-00')); // false
console.log(cep.test('2541-700')); // false
console.log(cep.test('25411-70b')); // false
console.log('----------------------\n');

const telefone = /\(\d{2}\)\s?\d{4,5}-\d{4}/;

console.log('-------telefone------');
console.log(telefone.test('(21) 1234-5678')); // true
console.log(telefone.test('(21) 1234-567')); // false
console.log(telefone.test('(21) 1234-56h')); // false
console.log(telefone.test('(21) 91234-5678')); // true
console.log('----------------------\n');

