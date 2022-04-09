function textLength(text) {
  if (text.length > 10) {
    return console.log(`Texto muito longo`);
  }
  return console.log(`Texto dentro do limite`);
}

textLength('Texto longo');
textLength('Texto');