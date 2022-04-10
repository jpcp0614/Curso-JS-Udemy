function checkNumber(num) {
  let number = Number(num);
  if (Number.isNaN(number)) {
    return console.log('Por favor, passe somente números para o programa!');
  }
  return number;
}

checkNumber(5);
checkNumber('xablau');