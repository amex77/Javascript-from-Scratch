var new_user ="Super";
var new_user=10;
console.log(new_user)

//var is globally scoped and can be redeclared and updated

//let is block scoped and can be updated but not redeclared

let old_user="Raj";
{
  let old_user="Raju";
  console.log(old_user)
}

console.log(old_user)

//const cannnot be updated and redeclared

const author="Super User";
//author= 5; 
//throws an error as const cannot be updated

console.log(author)


// var can be initialized with undefined but let and const cannot be initialized with undefined

var a;


//const a; throws error as const cannot be initialized with undefined

{
  var z=10;
}
console.log(z)