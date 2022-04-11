/*

TODO Conjunto de caracteres

* Conjunto pode ser criado como um array [] (ex.: [a,b,c])

* Com um traço podemos definir um intervalo também (ex.: [a-z])

*/

const reg1 = /[12345]/; //* -> não é muito eficiente

console.log(reg1.test('Tem o número 6?')); // false
console.log(reg1.test('Tem o número 1?')); // true
console.log(reg1.test('Tem o número 23?')); // true


const reg2 = /[0-9]/; //* -> se existem números no conjunto

console.log(reg2.test('Tem o número 6?')); // true
console.log(reg2.test('Tem o número 1?')); // true
console.log(reg2.test('Tem o número 23?')); // true