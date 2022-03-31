let nome = 'John';

switch(nome) {
  case 'John':
    console.log('O nome é John');
    break;
  case 'Wick':
    console.log('O nome é Wick');
    break;
  default:
    console.log('O nome não é John e nem Wick');
    break;
}

if (nome == 'John') {
  console.log('O nome é John');
} else if (nome == 'Wick') {
  console.log('O nome é Wick');
} else {
  console.log('O nome não é John e nem Wick');
}