// Write a function that takes an array of objects with a name and age property and returns the average age of all the objects. Use the reduce method to accomplish this.
arr=[
    {
        'name':'Jana',
        'age':19
    },
    {
        'name':'Kumar',
        'age':20
    }
];
avg_age=arr.reduce((e1,e2)=>e1+e2.age,0);
console.log(avg_age);