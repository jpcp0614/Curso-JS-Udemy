/*

* Uma forma de ter uma função com uma quantidade indefinida de parâmetros
* O operador rest vai virar um array
* O parâmetro é definido por ...nome

*/

let num1 = 2;
let num2 = 5;
let num3 = 12;
let num4 = 8;

function imprimirNum(...args) {
  let arrayNum = [];
  for (let i = 0; i < args.length; i++) {
    arrayNum.push(args[i]);
  }

  let obj = {
    arrayNum,
    totalNum: arrayNum.length,
  };

  return obj;
}

console.log(imprimirNum(num1, num2, num3, num4));

