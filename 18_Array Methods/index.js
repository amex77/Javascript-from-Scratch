// Array methods

let num = [1, 3, 6, 9];
let a = num.toString();
console.log(a);
console.log(typeof a);

let c = num.join(" and ");
console.log(c, typeof c);


let p = num.pop();
console.log(num, p);

//pop returns the popped element

// let r = num.push(56) // push returns the new array length
// console.log(num, r)

// let r = num.shift()
// console.log(r, num) // Removes an element from the start of the array

let r = num.unshift(78)
console.log(r, num)
console.log(r)

//includes function
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// Expected output: true
