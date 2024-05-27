// conditional statements
// if statement
const prompt = require("prompt-sync")();
let a = prompt("Hey whats your age?");
a = Number.parseInt(a); // Converting the string to a number

if (a > 18) {
  console.log("You are eligible to drive");
} else if (a < 18) {
  console.log("You are NOT eligible to drive");
} else {
  console.log("Invalid Input");
}

// ternary operator

let age = prompt("Hey whats your age?");
console.log("You ", age < 18 ? "can vote" : "cannot vote");
