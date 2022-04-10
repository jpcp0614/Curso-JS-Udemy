/*

TODO Herança (inheritance)

* Classe que pode herdar propriedades de outra classe

* Utilizar o extends

*/

class Mammal {
  constructor(legs) {
    this.legs = legs;
  }

  get legsMammal() {
    return this.legs;
  }

  set legsMammal(value) {
    this.legs = value;
  }
}

class Dog extends Mammal {
  constructor(legs, name) {
    super(legs);
    this.name = name;
  }

  get nameDog() {
    return this.name;
  }

  set nameDog(value) {
    this.name = value;
  }
}

let foxTerrier = new Dog(4, "Fox Terrier");
console.log(foxTerrier);