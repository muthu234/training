// Write a function that takes an array of objects with a name and salary property and returns the total salary of all the employees. Use the reduce method to accomplish this.
a=[
    {
        'name':'kumar',
        'salary':10000
    },
    {
        'name':'arun',
        'salary':15000
    }
];
total_salary=a.reduce((e1,e2)=>e1+e2.salary,0);
console.log(total_salary);