// Write a function that takes an array of objects with a name and grades property and returns a new array with only the objects where the average grade is greater than a given amount. Use the filter method to accomplish this.
a=[
    {
        'name':'Sabari',
        'grade':"A"
    },
    {
        'name':'Jana',
        'grade':"B"
    },
    {
        'name':'kaliraj',
        'grade':"D"
    }
];
m=a.filter(e=>e.grade>="C")
console.log(m);