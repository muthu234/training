// Write a function that takes an array of objects with a name property and returns a new array of strings with the name of each object capitalized. Use the Map object to accomplish this.
var a=[{name:'vel'},{name:'kumar'},{name:'muthu'},{name:'mari'}]
n= a.map((e)=> {
    emp={}
    x="";
    x+=e.name.charAt(0).toUpperCase();
    for(i=1;i<e.name.length;i++){
        x+=e.name[i];
    }
    emp.name=x;
    return emp;
});

console.log(n)