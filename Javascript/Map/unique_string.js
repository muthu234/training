// Write a function that takes an array of strings and returns a new array with only the unique strings. 
function UniqueStrings(array) {
    const stringMap = new Map();
    const uniqueStrings = [];
  
    for (const string of array) {
      if (!stringMap.has(string)) {
        uniqueStrings.push(string);
        stringMap.set(string, true);
      }
    }
  
    return uniqueStrings;
  }
  const array = ["jana", "anbu", "arul", "jana"];

  const uniqueStrings = UniqueStrings(array);
  
  console.log(uniqueStrings);
    