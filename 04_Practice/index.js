//create a variable of type string and try to add a number to it

let a = "super user";
let b = 5;
console.log(a + b);

//use typeof operator to find the datatype

let c = "super user";
let d = true;
let e = 5;
let f = Symbol("i am a symbol");
let g = null;
let h = BigInt("5677") + BigInt("33");
let i = undefined;


console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(e));
console.log(typeof(f));
console.log(typeof(g));
console.log(typeof(h));
console.log(typeof(i));

//create a const object in javascript can you change it to hold a number later

const data = {
  superuser: "50000",
  designation: "developer",
  ismarried: "false"
  
}

//data= "super user";
//Here it throws error because we can't change the value of const variable


//try to add a new key to the const object in problem 3 were you able to do it

data ['name'] = "ElonMusk";
console.log(data)

//write a js program to create a word meaning dictionary of 5 words

const dict ={
  
  "agile": "the ability to move quickly and easily.",
  "ubiquitous": "present, appearing, or found everywhere.",
  "efficacy": "the ability to produce a desired or intended result.",
  "ephemeral": "lasting for a very short time.",
  "serendipity": "the occurrence and development of events by chance in a happy or beneficial way."
}

console.log(dict.agile)


