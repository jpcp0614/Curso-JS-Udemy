/*

* Podemos dividir varáveis com propriedades do objeto com uma notação diferente

*/

const person = {
  name: 'Diego',
  age: 23,
  address: {
    city: 'Rio de Janeiro',
    state: 'RJ',
  },
}

const { name, age, address } = person;

console.log(`${name} tem ${age} anos e mora no ${address.city} - ${address.state}`);