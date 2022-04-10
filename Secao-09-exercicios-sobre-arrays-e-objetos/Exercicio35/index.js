const calculadora = {
  somar: (a, b) => a + b,
  subtrair: (a, b) => a - b,
  multiplicar: (a, b) => a * b,
  dividir: (a, b) => a / b,
}

function calculator(a, b, op) {
  return calculadora[op](a, b)
}

console.log(calculator(2, 6, 'somar'));
console.log(calculator(2, 1, 'subtrair'));
console.log(calculator(4, 4, 'multiplicar'));
console.log(calculator(2, 8, 'dividir'));