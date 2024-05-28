// so now working on functins

let a=10;
let b=20;
let c=25;

//arrow function

const sum = (x,y)=>{
    return x+y;
}

function aavg (x,y){
   return (x+y)/2
}

console.log("The average of b and c is "+ aavg(b,c))
console.log("The average of a and b is "+ aavg(a,b))
console.log("The average of c and a is "+ aavg(c,a))
console.log(sum(12,10));


