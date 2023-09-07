     
    // 6. Write a function that takes an array of objects with a name and hobbies property and returns a new array with only the objects where the hobbies include a given hobby. Use the filter method to accomplish this.
    arr=[
        {
            'name':'Jeeva',
            'hobby':'Sports',
        },
        {
            'name':'Jana',
            'hobby':'Music',
        }];
newa=arr.filter(e=>e.hobby=='Sports')
console.log(newa);