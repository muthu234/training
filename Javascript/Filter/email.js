// Write a function that takes an array of objects with a name and email property and returns a new array with only the objects where the email address includes a given domain. Use the filter method to accomplish this.
a=[
    {'name':'arul','email':'.com'},
    {'name':'kumar','email':'.ai'}
];
s=a.filter(e=>e.email==".com");
console.log(s);