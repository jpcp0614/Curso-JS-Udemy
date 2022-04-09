function imprimirNoConsole() {
    console.log('Olá, mundo!');
}

imprimirNoConsole();

function imprimirNumero(num) {
  console.log(num);
}

imprimirNumero(5);

const numeroAleatorio = function() {
  console.log(Math.random());
}

numeroAleatorio();

const somarNumeros = (a, b) => {
  console.log(a + b);
}

somarNumeros(2, 4);