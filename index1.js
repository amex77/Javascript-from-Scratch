//map method
arr=[5,55,65,85,74]
let a = arr.map((value, index, array) =>{
    console.log(value,index,array)
    return (value + index)
})

console.log(a);


//filter method
let arr2 = [9, 23, 1, 80, 3, 5]
let a2 = arr2.filter((a) => {
  return a > 5
})

console.log(a2);


//reduce
let arr3 = [12, 2, 53, 5, 2]
const reduce_func = (element, element2) => {
  return element + element2
}
let newarr3 = arr3.reduce(reduce_func)
console.log(newarr3)

