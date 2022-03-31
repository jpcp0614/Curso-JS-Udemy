let nome = 'John';
console.log(nome);

for (let i = 0; i < 10; i++) {

  if (i == 2) {
    nome = 'Wick';
    console.log(nome);
  }

  if (i == 5 && nome == 'Wick') {
    console.log('O nome é John Wick');
    break;
  }

  console.log(i);
}