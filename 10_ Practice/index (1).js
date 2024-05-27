//practice set 2
//Q1
/* 
const prompt = require("prompt-sync")();
let age = Number.parseInt(prompt("what is your age?"));
if (age<10 && age>20){
  console.log("true");
}
else{
  console.log("false");
}
*/

//Q2
// number divisible by 2 and 3
const prompt = require("prompt-sync")();

let num = Number.parseInt(prompt("enter a number"));
if (num % 2 == 0 && num % 3 == 0) {
  console.log("The number is divisible by 2 and 3");
} else if (num % 2 == 0) {
  console.log("The number is divisible by 2");
} else if (num % 3 == 0) {
  console.log("The number is divisible by 3");
} else {
  console.log("The number is neither divisible by 2 nor 3");
}

// ternary operator question
/*
(num>=18)? console.log("you can drive"):console.log("you cannot drive");
*/
