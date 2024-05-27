
const prompt=require("prompt-sync")();
const alert=require("alert-node");
let userInput = prompt("Enter your Marks");
let marks = Number.parseInt(userInput);
if (marks >= 90 && marks <+100){
  alert("Grade A");
}
else if (marks >= 80 && marks <= 89){
  alert("Grade B")
}
else if (marks >= 70 && marks <= 79){
  alert("Grade C")
}
else if (marks >= 60 && marks <= 69){
  alert("Grade D")
}
  else if (marks >= 0 && marks <= 50){
    alert("Grade F")
}
    
else{
  alert("Invalid Marks entered")
}