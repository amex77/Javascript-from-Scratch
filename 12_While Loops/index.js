//while loops

/* const prompt=require("prompt-sync")();
a=prompt("Enter a number");
a=Number.parseInt(a);
i=0;

while(i<a){
    console.log(i);
    i++
}
 */

/* const prompt=require("prompt-sync")();
a=prompt("Enter a number");
a=Number.parseInt(a);
i=120;

do {
    console.log(i);
    i++
}while(i<a) */

//do while looop is  a type of loop which no matter it execute once

//Program to print n natural numbers using while loop

/* const prompt = require("prompt-sync")();
let a = prompt("Enter a number");
a = Number.parseInt(a);
let i = 1;

let sum = 0;
while (i <= a) {
  sum += i;
  i++;
} 

console.log(sum);
*/

//Program to print n natural numbers using do while loop

const prompt = require("prompt-sync")();
let a = prompt("Enter a number");
a = Number.parseInt(a);
let i = 1;

let sum = 0;
do {
  sum += i;
  i++;
}while (i <= a);

console.log(sum);