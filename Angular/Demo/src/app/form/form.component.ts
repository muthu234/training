import { User } from './../user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
 user=new User('','','','',false)
 a:boolean=false;
//  c:boolean=false;
 sub(){
  console.log(this.user);
 }
 Validate(){
  this.a=true;
 }
 cancel(){
// this.c=true;
location.reload();
alert("Are you exit this form");
// history.go(0);  
 }
 
}
