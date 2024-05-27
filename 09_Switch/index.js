const prompt=require("prompt-sync")();
let a = prompt("Enter a number of week: ");
num = Number.parseInt(a);

switch (num){
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
     console.log("Wednesday");
     break;  
  case 4:
     console.log("Thursday");
     break; 
  case 5:
      console.log("Friday");
      break;  
  case 6:
      console.log("Saturday");
      break;  
  case 7:
      console.log("Sunday");
      break;
  default:
    console.log("Invalid input");
    
}
