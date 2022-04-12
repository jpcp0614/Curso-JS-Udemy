let promise = Promise.resolve(new Error('Deu ruim aqui!!!'));


promise.then(value => console.log(value))
  .catch(error => console.log(error));