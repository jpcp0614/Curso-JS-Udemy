/*

TODO Prototype

* É um objeto de um objeto (sempre que se cria um objeto, se tem um prototype - é a instância de um objeto em si)

* Um objeto fallback de outro objeto

* Quando um objeto recebe uma requisição de uma propriedade que não existe, ele procura na propriedade de um objeto que o possui.

* O prototype de um objeto criado do zero é o Object (pai de todos os objetos), que tem métodos nativos da linguagem

*/

const pessoa = {
  nome: 'Pedro',
  idade: 20,
}

//* dá pra ver qual o prototype de pessoa
//* O objeto criado ele tem como prototype o Object
console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) === Object.prototype);

console.log(pessoa.hasOwnProperty('nome'));