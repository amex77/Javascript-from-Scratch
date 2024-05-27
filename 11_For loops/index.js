// for loops
// lets write a program to find sum of n natural numbers via for loop

/*

const prompt = require("prompt-sync")();
let n = prompt("Enter a number");
let sum =0;

for (let i=0; i<n; i++){
    sum+= (i+1) ;
}

console.log(sum); 

*/

// lets write a program to find factorial of a number

/* const prompt = require("prompt-sync")();

let a = prompt("Enter a number");
a=Number.parseInt(a)
fact=1;
for(let x=0; x<a; x++){
    fact*=(x+1);
}
console.log(fact);
 */


/* /*let is block scoped wheras as var is global scoped
for example in the above code variable x is assigned as let if we'll try 
to print the value of x outside of the loop that'll be invalid because the 
scope of x starts and ends in the loop whereas
if we would've used var they'll be no syntax error in that and the value would've printed
as it is global scoped */



/* // For In loop

for (let property in object) {
    // code block to be executed
  }
 */

let obj = {
  Ashish: 10,
  Arpit: 9,
  Aman: 7,
  Kushal: 8,
  Kiara: 9,
};

for (let y in obj) {
  console.log("Ratings of " + y + " is " + obj[y]);

}

// For of LOOP
for (let z of "Javascript"){
    console.log(z);
}


