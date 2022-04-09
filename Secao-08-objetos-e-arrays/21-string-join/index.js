//* pega um array e transforma numa string
let arrayProdutos = [ 'TV', ' Notebook', ' Smartphone' ];

console.log(arrayProdutos);

let fraseProdutos = arrayProdutos.join(',');
console.log(fraseProdutos);

let frase = 'john wick';
let array = frase.split(' ');
console.log(array);

let email = `${array.join('_')}@gmail.com`;
console.log(email);