let pessoa = {
  nome: 'João',
}
console.log(pessoa);

let pessoa2 = pessoa;

console.log(pessoa == pessoa2);

pessoa2.nome = 'Maria';

console.log(pessoa);