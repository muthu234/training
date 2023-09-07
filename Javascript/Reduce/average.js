// Write a function that takes an array of numbers and returns the average of all the numbers. Use the reduce method to accomplish this.
 const a=[5,10,20,25];
avg = a.reduce((e1,e2)=>e1 + e2,0);
console.log(avg);