// Write a function that takes an array of objects with a name and age property and returns a new array with only the objects where the age is greater than a given amount. Use the filter method to accomplish this.
arr=[
    {'name':'Arun',
    'age':20
    },
    {'name':'kumar',
    'age':25
    }];
newa=arr.filter(e=>e.age>20)
console.log(newa);