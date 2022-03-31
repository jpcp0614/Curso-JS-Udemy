for (let i = 10; i > 0; i--) {

  if (i % 2 == 0) {
    console.log('Caiu em número par');
    continue;
  }
  console.log(i);
}