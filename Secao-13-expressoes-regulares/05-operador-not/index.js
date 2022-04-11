/*

TODO Operador not

* Podemos escrever um set que aceita tudo, menos alguns caracteres usando o not ^

* Lembrando que as combinações serão aceitas, o negado será apenas se bater com o set

*/

const notAaBb = /[^aAbB]/; // -> só elas isoladamente

console.log(notAaBb.test('a')); // false
console.log(notAaBb.test('A')); // false
console.log(notAaBb.test('b')); // false
console.log(notAaBb.test('B')); // false
console.log(notAaBb.test('Funciona aqui com a letra A?')); // true

const notAaZz = /[^aA-z]\s/; // -> todas: \s para aceitar espaços em branco

console.log(notAaZz.test('tudo bem')); // false