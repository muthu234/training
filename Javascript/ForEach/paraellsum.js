// Given two arrays of integers. Add up each element in the same position and create a new array containing the sum of each pair. Assume both arrays are of the same length.
var a=[1,2,3,4,5];
var b=[6,7,8,9,10];
var c=[];
for(i=0;i<a.length;i++)
{
    c[i]=a[i]+b[i]
}
c.forEach(e => {
    console.log(e);
});