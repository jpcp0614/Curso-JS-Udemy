function* criadorId() {
  let id = 0;
  while(true) {
    yield id += Math.floor(Math.random() * 1000);
  }
}

let criaId = criadorId();

console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);