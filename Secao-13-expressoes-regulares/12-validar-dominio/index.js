/*

TODO Validando domínios

*/

const validaDom = /[?www.]\w+\.com.br|.com/; // www.algumaCoisa.com.br (com ou sem br)

console.log(validaDom.test('www.algumaCoisa.com.br')); // true
console.log(validaDom.test('algumaCoisa.com.br')); // true
console.log(validaDom.test('algumaCoisa.com')); // true
