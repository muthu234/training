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
// now for proper way to TS
// Type annotation
// var a:number;
// Type annotation setting the value
// var b:number=10;
//  Type inference(number)
// var c=10;
// Type inference(number)
// var d=c+10;
// Type inference(string)
// var s=b+'hello World!';
// var nottype:number=b+'hello World!';
// primitive Types
// 1.explict Type annotation
// let firstname:string ='muthuvel';
// console.log(firstname);
// 2.implict Type annotation
// let firstname='muthuvel';
// console.log(firstname);
// // union Type
// let age:number|string;
// age='helo';
// age=20;
// console.log(age);
// dynamic Type
// let age:any=3.5;
// console.log(age);
//create object
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
