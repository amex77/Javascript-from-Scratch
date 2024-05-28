/* let marks ={
    shubham: 65,
    aakash: 29,
    vikrant: 99,
    Dj: 55
}


for(let key in marks){
    console.log("The Marks of  " + key + " are " + marks[key])
}

 for (let i=0; i<Object.keys(marks).length; i++){
    console.log("The Marks of  " +Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
} */

// Function to find mean of 5 numbers
const prompt = require("prompt-sync")();

/* let a= Number.parseInt(prompt("Enter a number"));
let b= Number.parseInt(prompt("Enter a number"));
let c= Number.parseInt(prompt("Enter a number"));
let d= Number.parseInt(prompt("Enter a number"));
let e= Number.parseInt(prompt("Enter a number"));
 */
//function to print mean of five numbers

/*  function mean(){
    return (a+b+c+d+e)/5
}

let result = mean();
console.log(result); 

const meena = (a, b, c, d, e) => {
    return (a + b + c + d + e)/5
}

console.log(meena(1,2,3,4,5));
 */

// program to print try again until the correct number is entered

x = 69;
let cn;

while (cn != x) {
  cn = prompt("Enter number of your choice");
  console.log("Try Again");
}

console.log("You have entered the desired number");
