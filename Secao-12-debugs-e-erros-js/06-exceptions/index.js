function greeting(name) {
  if (typeof name != 'string') {
    throw new Error('Name must be a string');
  }
  return console.log(`Hello, ${name}!`);
}

greeting('John');
greeting(5);