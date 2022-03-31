let x = 100;

// não é prático
// do {
//   console.log(x/2);
//   x = x - 5;
// } while (x >= 0);

while (x >= 0) {
  console.log(x/2);
  x = x - 5;
}