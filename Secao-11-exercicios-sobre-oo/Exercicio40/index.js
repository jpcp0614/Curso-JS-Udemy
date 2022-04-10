class ContaBanco {
  constructor(deposito) {
    this.contaC = deposito;
    this.contaP = 0;
  }

  getContaC() { return this.contaC; }

  getContaP() {
    if (this.contaP === 0) {
      return console.log(`Não há saldo em conta poupança.`);
    }
    return this.contaP += this.contaP * 0.01;
   }

   getTotal() { return this.contaC + this.contaP; }

  depositoC(value) { return this.contaC += value; }

  depositoP(value) { return this.contaP += value; }

  saqueC(value) { return this.contaC -= value; }

  transferirCP(value) {
    if (value > this.contaC) {
      return console.log(`Saldo insuficiente para transferência.`);
    }
    this.contaC -= value;
    this.contaP += value;
    return console.log(`Transferência realizada com sucesso.`);
  }

  transferirPC(value) {
    if (value > this.contaP) {
      return console.log(`Saldo insuficiente para transferência.`);
    }
    this.contaP -= value;
    this.contaC += value;
    return console.log(`Transferência realizada com sucesso.`);
  }
}

class ContaEspecial extends ContaBanco {
  constructor(deposito) {
    super(deposito);
  }

  getContaP() {
    if (this.contaP === 0) {
      return console.log(`Não há saldo em conta poupança.`);
    }
    return this.contaP += this.contaP * 0.02;
   }
}

const contaComum = new ContaBanco(1000);
const contaEspecial = new ContaEspecial(1000);

console.log(contaComum);
console.log(contaEspecial);

contaComum.transferirCP(500);
console.log(contaComum.getContaP());
console.log(contaComum.getTotal());

contaComum.transferirCP(600);

contaComum.transferirPC(500);
console.log(contaComum.getContaC());

contaEspecial.transferirCP(500);
console.log(contaEspecial.getContaP());

console.log(contaEspecial);