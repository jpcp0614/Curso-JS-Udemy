let a = 10;

function multiplicar(x, y) {
  let a = x * y;

  if (a > 10) {
    let a = 0;

    console.log(a); //* 0
  }

  console.log(a); //* 14
}

console.log(a); //* 10

multiplicar(2, 7);