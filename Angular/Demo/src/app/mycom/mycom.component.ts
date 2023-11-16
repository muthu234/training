import { Component } from '@angular/core';
@Component({
  selector: 'app-mycom',
  templateUrl: './mycom.component.html',
  styleUrls: ['./mycom.component.scss']
})
export class MycomComponent {
  b=['muthu','vel','kumar','mani'];
  a:number=11;
  myFun(a:number){
    // this.a=Number(b);
    console.log(this.a);
    console.log("Hello My fun"); 
  }
m:boolean=false;
}