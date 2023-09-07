// Get the sum of two arrays…actually the sum of all their elements.P.S. Each array includes only integer numbers. Output is a number too.
sum=0 
var a=[1,2,3,4,5];
a.forEach(e =>{
    sum=e+sum
});
console.log(sum)