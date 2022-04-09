function soma(a, b) {
  if (a === undefined || b === undefined) {
    console.log('Faltam argumentos');
  } else {
    return console.log(a + b);
  }
}

soma(10, 8);
soma(10);

function saudacao(nome, idade) {
  if (idade === undefined) {
    return console.log(`Olá ${nome}`);
  } else {
    return console.log(`Olá ${nome}, você tem ${idade} anos`);
  }
}

saudacao('João');
saudacao('João', 20);