/*

TODO Validando e-mails

*/

const validaEmail = /\w+@\w+\.\w{3}/; // email@dominio.com

console.log(validaEmail.test('teste@email.com')); // true

