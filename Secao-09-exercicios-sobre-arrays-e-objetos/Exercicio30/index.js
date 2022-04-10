const arrayNames = ['João', 'Lucas', 'Nádia', 'Fernanda', 'Cairo'];

function verifyName(name) {
  if (arrayNames.includes(name)) {
    return console.log(`${name} está na lista`);
  }
  return console.log(`${name} não está na lista`);
}

verifyName('João');