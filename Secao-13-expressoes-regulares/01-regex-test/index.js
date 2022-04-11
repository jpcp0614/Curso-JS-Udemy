const reg1 = new RegExp('bola');

console.log(reg1.test('Será que tem a palavra bola?')); // true
console.log(reg1.test('Não tem!!!')); // false

const reg2 = /teste/;
let frase1 = 'Esta é uma frase de teste!';
let frase2 = 'FraseTodaComplexaParaUmNovoTeste'

console.log(reg2.test(frase1)); // true
console.log(reg2.test(frase2)); // false