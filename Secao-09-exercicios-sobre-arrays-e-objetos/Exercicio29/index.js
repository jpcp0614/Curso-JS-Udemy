const bus = {
  wheel: 8,
  seats: 40,
  doors: 2,
}


bus.windows = 20;
delete bus.wheel;

console.log('Número de janelas: ', bus.windows);