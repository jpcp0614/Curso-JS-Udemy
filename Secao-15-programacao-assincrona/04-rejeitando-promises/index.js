function verifyNumber(num) {
  return new Promise((resolve, reject) => {
    if (num == 2) {
      resolve(console.log(num));
    } else {
      reject(new Error('Deu ruim!!!'));
    }
  });
}

verifyNumber(2);
verifyNumber(1);