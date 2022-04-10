let a = 1;
let b= 2;
let c = 3;

//* 1
if (c > a) {
  a = b;
  debugger;
}

//* 2
for (let i = 5; i > 0; i--) {
  b++;
  a = a + c + 1;
  c += 2;
  debugger;
}

//* 3
if (b == a) {
  a++;
} else {
  a = a + b + c;
  debugger;
}

//* 4
debugger;

a = a * b;

//* 5
debugger;