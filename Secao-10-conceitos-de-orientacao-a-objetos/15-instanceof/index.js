/*

TODO instanceof operator

* Podemos verificar se um objeto é instância de outro

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

console.log(new Dog instanceof Mammal); // true
console.log(foxTerrier instanceof Dog); // true