// Write a function that takes an array of strings and returns an object where the keys are the strings, and the values are the number of times each string appears in the array.
function countStrings(arr) {
    return arr.reduce((acc, curr) => {
      if (acc[curr]) {
          acc[curr] += 1;
      } else {
        acc[curr] = 1;
      }
      return acc;
    }, {}); 
  }
const stringsArray = ["apple", "banana", "apple", "cherry", "banana"];
const result = countStrings(stringsArray);
console.log(result);
  