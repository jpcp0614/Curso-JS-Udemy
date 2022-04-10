const cachorro = {
  raca: 'SRD',
  latir: function () {
    console.log("Au au");
  },
  uivar: function () {
    console.log("Auuuu");
  },
  rosnar: function () {
    console.log('grrrrr')
  },
  setRaca: function (raca) {
    this.raca = raca;
  },
  getRaca: function () {
    return this.raca;
  }
}

cachorro.rosnar();
cachorro.latir();
cachorro.uivar();
cachorro.setRaca('Fox Paulistinha');
console.log(cachorro.getRaca());

