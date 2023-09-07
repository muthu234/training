// Write a function that takes an array of objects with a price property and returns a new array with only the objects that have a price less than a given amount. Use the filter method to accomplish this.
price=[500,3000,600]
    // 'object'='mobile','amount'=10000
a=price.filter(e=>e>600);
console.log(a);