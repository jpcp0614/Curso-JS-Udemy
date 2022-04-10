let arr1 = [1, 2, 3, 4, 5];
let arr2 = [];

function iterarArray(array) {
  if (array.length === 0) {
    throw new Error('Array vazio');
  }
  for (let i = 0; i < array.length; i++) {
    console.log(i * 2);
  }
}

function arrayVazio(array) {
  let itens = '1, 2, 3, 4';
  if (array.length > 0) {
    throw new Error('Array não vazio');
  }
  let arr = itens.split(',');
  let arrOfNumbers = arr.map(Number);
  return console.log(arrOfNumbers);
}

// iterarArray(arr1);
// iterarArray(arr2);

// arrayVazio(arr1);
arrayVazio(arr2);