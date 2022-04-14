async function somar(a, b) {
  return a + b;
}

console.log(somar(2, 6));

somar(2, 6).then(value => console.log(value));