let velocidade = 75;

// if (velocidade <= 80) {
//   console.log('Não foi multado');
// } else {
//   console.log('Foi multado');
// }

if (velocidade > 80) {
  console.log('Acima da velocidade permitida');
} else if (velocidade >= 50 && velocidade <= 80) {
  console.log('Você está dentro da velocidade permitida');
} else {
  console.log('Você está muito devagar');
}