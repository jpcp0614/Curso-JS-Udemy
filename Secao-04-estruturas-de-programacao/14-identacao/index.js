let x = 0;
let y = 1;

if (x == 0 && y == 1) {
  let z = 5;
  if (z > 2) {
    console.log('z > 2');
    for (i = 0; i <= 10; i = i + 2) {
      console.log(i);
      if (i == 2) {
        console.log('Chegou em i = 2')
      }
    }
  }
}