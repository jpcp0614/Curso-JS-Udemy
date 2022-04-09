function multiplicar(x, y, z) {
  return x * y * z;
}

console.log(multiplicar(1, 5, 7));

function podeDirigir(idade, cnh) {
  if (idade >= 18 && cnh == true) {
    console.log('Pode dirigir');
  } else {
    console.log('Não pode dirigir');
  };
}

podeDirigir(19, true);
podeDirigir(15, true);
podeDirigir(18, false);
podeDirigir(20, 1);
