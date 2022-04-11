/*

TODO Validando datas

*/

const validaData = /\d{2}\/\d{2}\/\d{4}/; // dd/mm/aaaa

console.log(validaData.test('01/01/2019')); // true


const validaData2 = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;

console.log(validaData2.test('01/01/201')); // false



