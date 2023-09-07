// Write a function that takes an array of numbers and returns the product of all the numbers.
function Productno(arr) {
    if (arr.length === 0) {
      return 1; 
    }
  
    return arr.reduce((accumulator, currentNumber) => {
      return accumulator * currentNumber;
    }, 1); 
    }
 const numbersArray = [3,5,5];
  const result = Productno(numbersArray);
  console.log(result);
  