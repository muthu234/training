import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  show=true;
   emps=['muthu','vel','kumar'];
  name:string='muthu';
  // myfun(){
  //   console.log(this.name)};
}

