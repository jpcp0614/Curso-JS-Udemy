/*

* JSON = JavaScript Object Notation
* Utilizado para comunicação entre serviços, ex.: Back-end <-> Front-end
* Basicamente, um tipo de dado padronizado, que lembra muito os objetos de JS

*/

let person = {
  "nome": "Diego",
  "idade": 23,
  "endereco": {
    "cidade": "Rio de Janeiro",
    "estado": "RJ"
  }
}

console.log(person.endereco);
console.log(person.idade);
console.log(person.endereco.estado);