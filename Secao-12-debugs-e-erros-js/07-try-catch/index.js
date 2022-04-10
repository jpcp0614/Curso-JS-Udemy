function checkNumbers(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error(`Os parâmetros precisam ser números`);
  }
}

function soma(a, b) {
  try {
    checkNumbers(a, b);
    return a + b;
  } catch (error) {
    console.log('Mensagem de Error: ' + error.message);
  }
}

console.log(soma(2, 4));
soma(2, 'xablau');

// try {

//   let a = 2 + b;
  
// } catch (error) {
//   console.log('Algo deu errado: ', error);
// }