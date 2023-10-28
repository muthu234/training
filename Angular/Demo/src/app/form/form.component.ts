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
 sub(){
  console.log(this.user);
 }
 Validate(){
  this.a=true;
 }
 
}
