// Problem 1
let str = 'Ash"';
console.log(str.length);

// Problem 2
const sentence = "The quick brown fox jumps over the lazy dog.";
const word = "fox2";
console.log(sentence.includes(word));
console.log(
  `The word "${word}" ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`
);
//negative slicing
console.log(sentence.slice(-9, -5));

//Problem 3
console.log(word.toLowerCase())
console.log(word.toUpperCase())

// Problem 4
/* let str2 = "Please give Rs 1000"
let amount = Number.parseInt(str2.slice(15))
console.log(amount)
console.log(typeof amount) */

// Problem 4 method 2
let str2 = "Please give Rs 1000"
let amount = Number.parseInt("Please give Rs ".length)
console.log(str2.slice(amount))
console.log(typeof amount)

// Problem 5
let friend = "Deepika"
friend[3] = "R"
console.log(friend) // friend is not changed, because string is immutable

//concat

const str1 = 'Hello';
const str0 = 'World';

console.log(str1.concat(' ', str2));
// Expected output: "Hello World"

console.log(str2.concat(', ', str1));
// Expected output: "World, Hello"

