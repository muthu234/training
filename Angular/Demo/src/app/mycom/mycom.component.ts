import { Component } from '@angular/core';
@Component({
  selector: 'app-mycom',
  templateUrl: './mycom.component.html',
  styleUrls: ['./mycom.component.scss']
})
export class MycomComponent {
  a:number=100;
  myFun(b:string){
    this.a=Number(b);
    console.log(this.a);
    // console.log("Hello My fun"); 
  }
m:boolean=false;
}