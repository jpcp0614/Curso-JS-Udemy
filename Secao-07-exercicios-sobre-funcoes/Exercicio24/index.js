const calcPow = (base, exp) => Math.pow(base, exp)

console.log(calcPow(3, 2));

const calcPow2 = (base, exp) => {
  let result = 1;
  for (let i = 0; i < exp; i++) {
    result *= base;
  }
  return result;
}

console.log(calcPow(2, 3));

const calcPow3 = (base, exp) => base ** exp;

console.log(calcPow3(2, 4));