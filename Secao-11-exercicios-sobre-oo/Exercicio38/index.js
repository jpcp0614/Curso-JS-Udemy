class AddressClient {
  constructor(logradouro, bairro, cidade, uf) {
    this.logradouro = logradouro;
    this.bairro = bairro;
    this.cidade = cidade;
    this.uf = uf;
  }

  getLogradouro() { return this.logradouro; }

  getBairro() { return this.bairro; }

  getCidade() { return this.cidade; }

  getUf() { return this.uf; }

  setLogradouro(logradouro) { this.logradouro = logradouro; }

  setBairro(bairro) { this.bairro = bairro; }

  setCidade(cidade) { this.cidade = cidade; }

  setUf(uf) { this.uf = uf; }

  toString() {
    return `${this.logradouro}, ${this.bairro}, ${this.cidade} - ${this.uf}`;
  }
}

const address = new AddressClient('Rua dos Bobos', 'Centro', 'São Paulo', 'SP');
console.log(address);
console.log(`Endereço completo: ${address.toString()}`);

address.setLogradouro('Rua dos Bobos, nº 0');
address.setBairro('Centro');
address.setCidade('Lugar Nenhum');
address.setUf('00');
console.log(address);