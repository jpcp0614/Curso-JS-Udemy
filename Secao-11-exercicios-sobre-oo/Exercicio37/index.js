class CarrinhoDeCompras {
  #itens;
  constructor(itens) {
    this.#itens = itens;
  }

  getItens() {
    return this.#itens;
  }

  addItem(item) {
    this.#itens.push(item);
  }

  totalPrice() {
    let total = 0;
    this.#itens.forEach(item => {
      total += item.price;
    });
    return total;
  }

  totalItens() {
    let totalItens = 0;
    this.#itens.forEach(item => {
      totalItens += item.qtd
    });
    return totalItens;
  }

  removeItem(name) {
    this.#itens = this.#itens.filter(item => item.name !== name);
  }

}

let carrinho = new CarrinhoDeCompras([
  {
    id: 1,
    name: 'Notebook',
    price: 4000.00,
    qtd: 1,
  },
  {
    id: 2,
    name: 'Cadeira',
    price: 500.00,
    qtd: 2,
  },
  {
    id: 3,
    name: 'Copo de Vidro',
    price: 10.00,
    qtd: 1,
  },
  {
    id: 4,
    name: 'Copo de Plástico',
    price: 5.00,
    qtd: 2,
  },
  {
    id: 5,
    name: 'Prato de vidro',
    price: 25.00,
    qtd: 6,
  }
]);

// console.log(carrinho);

console.log(carrinho.getItens());
console.log(carrinho.totalPrice());
console.log(carrinho.totalItens());
carrinho.removeItem('Prato de vidro');
console.log(carrinho.getItens());