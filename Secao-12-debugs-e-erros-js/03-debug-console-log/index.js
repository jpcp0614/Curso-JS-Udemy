let a = 1;
let b= 2;
let c = 3;

//* 1
if (c > a) {
  a = b;
  console.log('1) ', a);
}

//* 2
for (let i = 5; i > 0; i--) {
  b++;
  a = a + c + 1;
  c += 2;
  console.log('2) ', a);
}

//* 3
if (b == a) {
  a++;
} else {
  a = a + b + c;
  console.log('3) ', a);
}

//* 4
console.log('4) ', a);

a = a * b;

//* 5
console.log('5) ', a);