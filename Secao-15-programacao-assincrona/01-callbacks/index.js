console.log('1');

setTimeout(function() { // função assíncrono
  console.log('2');
}, 2000);

console.log('3');

// TODO ordem -> 1, 3, 2