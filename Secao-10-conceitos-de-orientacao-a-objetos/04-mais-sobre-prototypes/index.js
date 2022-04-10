/*

TODO Prototype

* Quando criamos um objeto, ele tem um prototype, que é o objeto que o possui

* Ele herdará tanto os métodos como as propriedades de Object (o prototype do objeto base)

*/

const pessoa = {
  nome: 'Pedro',
  idade: 20,
}

//* dá pra ver qual o prototype de pessoa
//* O objeto criado ele tem como prototype o Object
// console.log(Object.getPrototypeOf(pessoa));
// console.log(Object.getPrototypeOf(pessoa) === Object.prototype);

// console.log(pessoa.hasOwnProperty('nome'));

const novaPessoa = Object.create(pessoa);
console.log(novaPessoa.nome); // Pedro
console.log(novaPessoa.hasOwnProperty('trabalho')); // false

console.log(Object.getPrototypeOf(novaPessoa) === pessoa); // true