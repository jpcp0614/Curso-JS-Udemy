class ContaBanco {
  constructor (saldo) {
    this.saldo = saldo;
  }

  deposito(value) {
    this.saldo += value;
  }

  saque(value) {
    this.saldo -= value;
  }

  getSaldo() {
    return this.saldo;
  }
}

const minhaConta = new ContaBanco(1000);
minhaConta.deposito(100);
console.log(minhaConta.getSaldo());
minhaConta.deposito(250);
console.log(minhaConta.getSaldo());
minhaConta.saque(50);
console.log(minhaConta.getSaldo());