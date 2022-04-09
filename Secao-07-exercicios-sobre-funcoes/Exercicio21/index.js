function checkIsString(data) {
  if (typeof data === 'string') {
    console.log(`${data} is a string`);
  }
}

function checkIsNumber(data) {
  if (typeof data === 'number') {
    console.log(`${data} is a number`);
  }
}

function checkIsBoolean(data) {
  if (typeof data === 'boolean') {
    console.log(`${data} is a boolean`);
  }
}


function checkType(data) {
  checkIsString(data);
  checkIsNumber(data);
  checkIsBoolean(data);
}

checkType('Olá, mundo!');
checkType(true);
checkType(10);