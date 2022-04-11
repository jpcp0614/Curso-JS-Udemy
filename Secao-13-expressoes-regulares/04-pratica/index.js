const dia = /\d\d/; // dois números

console.log('Dia com 2 dígitos')
console.log(dia.test(10) && '10'.length == 2); // true
console.log(dia.test('1')); // false
console.log(dia.test('11')); // true
console.log(dia.test('a')); // false

const palavrasTresLetras = /\w\w\w/;

console.log('\nPalavras com pelo menos três letras')
console.log(palavrasTresLetras.test('abc')); // true
console.log(palavrasTresLetras.test('a')); // false
console.log(palavrasTresLetras.test('1')); // false