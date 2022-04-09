let nomes = ['João', 'Maria', 'José', 'Pedro', 'Ana', 'Paulo'];

nomes.forEach(nome => {
  let nomeNumber = nomes.indexOf(nome);
  console.log(`${nome} está na posição ${nomeNumber}`);
})