// Write a function that takes a string and returns an object where the keys are the characters in the string and the values are the number of times each character appears in the string.
function getCharCounts(string) {
    const charCounts = new Map();
  
    for (const char of string) {
      if (charCounts.has(char)) {
        charCounts.set(char, charCounts.get(char) + 1);
      } else {
        charCounts.set(char, 1);
      }
    }
  
    return charCounts;
  }
const string= "malayalam";
const charCounts=getCharCounts(string);
console.log(charCounts);