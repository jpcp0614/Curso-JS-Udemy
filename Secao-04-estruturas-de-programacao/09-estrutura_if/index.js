let idade = 19;

if (idade == 19) {
  console.log("Você é maior de idade");
}
if (idade > 25) {
  console.log("Você é maior de 25")
}

let nome = 'John';

if (idade > 10 && nome == 'John') {
  console.log('Liberado 1');
}

let passaporte = true;

if (nome == 'John' && idade > 30 || passaporte == true) {
  console.log('Liberado 2');
}