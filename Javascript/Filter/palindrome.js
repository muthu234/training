// Write a function that takes an array of strings and returns a new array with only the strings that are palindromes. Use the filter method to accomplish this.
function filterPalindromes(strings) {
    return strings.filter(str => str === str.split('').reverse().join(''));
  }
inputArray = ["racecar", "malayalam", "madam", "hello", "level"];
palindromicArray = filterPalindromes(inputArray);
  console.log(palindromicArray);
  