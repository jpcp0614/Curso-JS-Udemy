let json = {
  "nome": "José",
  "idade": 20,
  "endereco": {
      "rua": "Rua dos bobos",
      "numero": 0
  }
}

console.log(`Atributos do json: ${json.nome}, ${json.idade}, ${json.endereco.rua}, ${json.endereco.numero}`);