/*

TODO Caracteres especiais

* \d qualquer dígito [0-9]
* \D qualquer caractere que não seja dígito [^0-9]

* \w qualquer caractere alfanumérico
* \W qualquer caractere que não seja alfanumérico

* \s qualquer caractere de espaço em branco
* \S qualquer caractere que não seja espaço em branco

* . qualquer caractere, menos nova linha

*/

const pontoRegex = /./;
console.log('--------- regex . ----------');
console.log(pontoRegex.test(' ')); // true
console.log(pontoRegex.test('abc')); // true
console.log(pontoRegex.test('1234')); // true
console.log(pontoRegex.test('12dg-@kf_g%po$.j')); // true
console.log(pontoRegex.test('\n')); // false
console.log(pontoRegex.test('\t')); // true
console.log('---------------------------\n');

const dRegex = /\d/;
console.log('--------- regex d ---------');
console.log(dRegex.test(' ')); // false
console.log(dRegex.test('abc')); // false
console.log(dRegex.test('1234')); // true
console.log(dRegex.test('12dg-@kf_g%po$.j')); // true
console.log(dRegex.test('\n')); // false
console.log(dRegex.test('\t')); // false
console.log('---------------------------\n');

const DRegex = /\D/;
console.log('--------- regex D ---------');
console.log(DRegex.test(' ')); // true
console.log(DRegex.test('abc')); // true
console.log(DRegex.test('1234')); // false
console.log(DRegex.test('12dg-@kf_g%po$.j')); // true
console.log(DRegex.test('\n')); // true
console.log(DRegex.test('\t')); // true
console.log('---------------------------\n');

const sRegex = /\s/;
console.log('--------- regex s ---------');
console.log(sRegex.test(' ')); // true
console.log(sRegex.test('abc')); // false
console.log(sRegex.test('1234')); // false
console.log(sRegex.test('12dg-@kf_g%po$.j')); // false
console.log(sRegex.test('\n')); // true
console.log(sRegex.test('\t')); // true
console.log('---------------------------\n');

const SRegex = /\S/;
console.log('--------- regex S ---------');
console.log(SRegex.test(' ')); // false
console.log(SRegex.test('abc')); // true
console.log(SRegex.test('1234')); // true
console.log(SRegex.test('12dg-@kf_g%po$.j')); // true
console.log(SRegex.test('\n')); // false
console.log(SRegex.test('\t')); // false
console.log('---------------------------\n');

const wRegex = /\w/;
console.log('--------- regex w ---------');
console.log(wRegex.test(' ')); // false
console.log(wRegex.test('abc')); // true
console.log(wRegex.test('1234')); // true
console.log(wRegex.test('12dg-@kf_g%po$.j')); // true
console.log(wRegex.test('\n')); // false
console.log(wRegex.test('\t')); // false
console.log('---------------------------\n');

const WRegex = /\W/;
console.log('--------- regex W ---------');
console.log(WRegex.test(' ')); // true
console.log(WRegex.test('abc')); // false
console.log(WRegex.test('1234')); // false
console.log(WRegex.test('12dg-@kf_g%po$.j')); // false
console.log(WRegex.test('\n')); // true
console.log(WRegex.test('\t')); // true
console.log('---------------------------\n');