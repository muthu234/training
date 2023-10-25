// create config json => tsc -init
// watch mode particular folder => tsc -w
// watch mode particular file  => tsc file name.ts -w
// watch mode for separate folder for js file  => tsc filename.ts -w -outdir foldername
// let a=1
//  let a='hello'
//  console.log(a);
// ----------------
// Datatypes
// var any1;
// var num1:number;
// var num2:number=2;
// var num3=3;
// var num4=num3+100;
// var str1 = num1+'hello';
// var nothappy:number =num1 +'hello wrld';
// _----------------------
// let a:(number|string)[] //union type

// var a:number | string
// a='world'
// a=50
// let a:
// let a:number [];//arrayDeclaration
// a=[12,3]
// console.log(a);
//To create object
// let a:{
//     name:string;
//     age:number;//object declaration
// }={
//     name:'muthu'
// }
// a=
// {
//     name:'muthu',
//     age:21
// }
// console.log(a);
// var numarr:number[]=[1,2,3]
// var numarr:{name:string;age:number}[]=[{name:'Kannan',age:22}]
// numarr.push(88);
// console.log(numarr);

// var a:any;
//  let b:number;
// b=a;
// console.log(b);
// -----------------------------------------
//------------- now for proper way to TS
// ---------Type annotation
// var a:number;
// -----------Type annotation setting the value
// var b:number=10;
// ------------ Type inference(number)
// var c=10;
// --------------Type inference(number)
// var d=c+10;
// -------------Type inference(string)
// var s=b+'hello World!';
// var nottype:number=b+'hello World!';
// -------primitive Types
// ---1.explict Type annotation
// let firstname:string ='muthuvel';
// console.log(firstname);
// ----2.implict Type annotation
// let firstname='muthuvel';
// console.log(firstname);
//-------------- union Type
// let age:number|string;
// age='helo';
// age=20;
// console.log(age);
// ------dynamic Type
// let age:any=3.5;
// console.log(age);
//------create object
// let a:{
//     name:string;
//     age:number;
// };
// a={
//     name:'kumar',
//     age:29,
// };
// console.log(a.name);
// create arrays
// let a:string[]=[];
// a.push('hello','world');
// console.log(a);
// console.log(a[0]);
// --------------create array of object
// var a:{
//     name:string,
//     age:number //type annotation
// }[];
// a=[{
//     name:'muthu',age:20
// },{
//     name:'kumar',age:25 //Type inference
    
// },{
//     name:'sasti',age:24 
    
// }];
// console.log(a[0].name,a[1].age);
// ----------------fliter by using array of object
// var fil=a.filter(e=>
//     {
//         if (e.age >20)
//         {
//             console.log(e.name);
            
//         }
//     })
// var fil2=a.filter(e => {
//     if(e.age>20){
//         return e;
//     }

// });
// fil2.forEach(e => {
//     console.log(e.name);
// })
// console.log(fil2[0].name);
// ------------normal function with return  datatype
// let a:number,b:number;
// function fn(a:number=10,b:number=30):number{
//     return a+b 
// }
// console.log(fn(10,20));
// -----optional argument using function
// function fn(a:number,b:number,c?:number):number
// {
//     if (typeof c!='undefined')
//     {
//         return a*b*c
//     }
//     return a*b
// }
// console.log(fn(10,2));
// ----optional argument using  arrow function & return Type
// var a=(a:number,b:number,c?:number):number =>
// {
//         if (typeof c!='undefined')
//         {
//             return a*b*c
//         }
//         return a*b
//     }
// console.log(a(10,2));
// ----default value using function & return Type
// function val(a:number,b:number,c:number):number{
//     return a+b+c
// }
// console.log(val(2,2,3));
// ---dynamic number of parameter (...) => to use multiple values
// function fn(a:number,b:number,...rest:number[]):number{
//     return a+b+rest.reduce((p,c)=> p+c,-1)
// }
// console.log(fn(3,3,3,3,3,3));
// ----annoymus function
// var fn=function(a:number,b:number,c:number):number
// {
//     return a/b*c
// }
// console.log(fn(10,2,2));
// ---using unknown datatype
// let a:unknown='hello'
// let b=(a as string).length;
// console.log(b);
// ---- declare array:
// let names:(string | number)[]=[5,6,'Hello'];
// console.log(names);
// --------------create array of object 
// var obj:{name:string,age:number,gender:string}[]=[{name:'muthu',age:20,gender:'Male'}];
// console.log(obj[0].name);
// --------------21.9.2023
//  class myclass{         ------interface
//     // a!:number; assumption operator
//     a!:number;
//     b!:number;
//     // readonly c:number=3;read only property. it is used in only read
//     constructor(){
//         // this.a=1;
//         //  var c=20;
//     }
// }
//  let o=new myclass()
//  o.a=10;
//  o.b=20;
// o.c=20;//readonly error
// console.log(o.a);
// console.log(o.b);
// console.log(o.c);
// ---  access private variable(get and set) method --private variable assign => _variable name(ex=>_a)
// class myclass{
//     _val:string="20"
//     get val():string{
//         // console.log("hello");
//         return this._val
//     }
//     set val(a:string){
//          this._val=a;
// }
// }
// let o=new myclass()
//  let a="50"
// console.log(o.val);
// console.log(a);
let message;
message='abce';
let end=(<string>message).endsWith('c');
let end1=(message as string).endsWith('c');

console.log(end1);



    











