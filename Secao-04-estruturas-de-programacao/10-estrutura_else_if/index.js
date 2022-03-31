let nome = 'John';
let idade = 40;

if (nome != undefined && nome == 'Paul') {
  console.log('O nome está definido');
} else if (nome == 'John' && nome.length > 3 && idade > 30) {
  console.log('O nome é John, tem mais de 3 caracteres e a idade é maior que 30');
} else {
  console.log('Não é o John')
}

if (1 > 2) {
  console.log('1 é maior que 2 ???');
} else if (1 < 2) {
  console.log('1 é menor que 2');
}