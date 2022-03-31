let x = 7;
let div = 0;

for (let i = 1; i <= x; i++) {
  if ( x % i == 0) {
    div++;
  }
}

if (div == 2) {
  console.log(`${x} é primo`);
} else {
  console.log(`${x} não é primo`);
}