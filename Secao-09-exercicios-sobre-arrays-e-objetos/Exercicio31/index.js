const array1 = ['Javascript', 'ReactJS', 'React Native', 'PHP', 'NodeJS', 'React Native', 'Ruby'];
const array2 = ['TypeScript', 'Java', 'C#', 'Python'];

function verifyArrayLength(array) {
  if (array.length < 5) {
    return console.log('Poucos elementos');
  }
  return console.log('Muitos elementos');
}

verifyArrayLength(array1);
verifyArrayLength(array2);