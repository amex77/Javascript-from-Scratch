let num = [3, 5, 1, 2, 4]

/* for(let i=0; i<num.length;i++){
console.log(num[i])
 } */

// ForEach Loop
num.forEach((element) => {
    console.log(element * element)
  })
  
  // Array.from 
  let name = "Harry"
  let arr = Array.from(name)
  console.log(arr)