let person = {
  "name": "Diego",
  "age": 23,
  "job": "Dev",
  "hobbies": ["Games", "Coding", "Music"],
  "address": {
    "city": "Rio de Janeiro",
    "state": "RJ"
  }
}

let personToString = JSON.stringify(person);
console.log(personToString);

let personToJson = JSON.parse(personToString);
console.log(personToJson);

console.log(`My favorite hobby: ${personToJson.hobbies[1]}`);
