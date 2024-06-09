// randomArrayLoop.js

// Function to generate a random array of integers
function generateRandomArray(length, min, max) {
    const arr = [];
    for (let i = 0; i < length; i++) {
      const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
      arr.push(randomNum);
    }
    return arr;
  }
  
  // Generate a random array of 10 integers between 1 and 100
  const randomArray = generateRandomArray(10, 1, 100);
  
  // Loop through the array and print each value
  console.log("Random Array Elements:");
  for (let i = 0; i < randomArray.length; i++) {
    console.log(`Index ${i}: ${randomArray[i]}`);
  }
  