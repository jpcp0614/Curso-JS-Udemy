let carro = {
  portas: 2,
  marca: "BMW",
  portaMalas: '200l',
  cor: 'azul',
  motor: 3.8,
  turbo: true,
}

let adicionais = {
  tetoSolar: true,
  arCondicionado: true,
}

console.log(carro);

Object.assign(carro, adicionais);

console.log(carro);