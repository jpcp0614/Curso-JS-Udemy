const array = ['Javascript', 'ReactJS', 'React Native', 'NodeJS', 'TypeScript'];

let newArray = [];
for (let i = 0; i < array.length; i++) {
  newArray.push(array[i]);
}

let obj = {
  array: newArray,
}

console.log(obj);