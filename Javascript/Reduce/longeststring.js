// Write a function that takes an array of strings and returns the longest string in the array. Use the reduce method to accomplish this.
a=["Bag","Book","College"];
longest_string=a.reduce((e1,e2)=>(e1.length>=e2.length ? e1:e2));
console.log(longest_string);