// Write a function that takes an array of objects with a quantity and price property and returns the total cost of all the objects, considering the quantity of each object. Use the reduce method to accomplish this. const a=[
arr=[{
        'name':'Book',
        'quantity':4,
        'price':500
    },
    {
        'name':'Bag',
        'quantity':3,
        'price':1200
    }
];
avg=arr.reduce((e1,e2)=>e1+ e2.price,0);
console.log(avg);