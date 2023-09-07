// Write a function that takes an array of objects with a price property and returns the total cost of all the objects. Use the reduce method to accomplish this.
 const a=[
    {
        'name':'Book',
        'price':100
    },
    {
        'name':'Bag',
        'price':500
    }
];
avg=a.reduce((e1,e2)=>e1+ e2.price,0);
console.log(avg); 
