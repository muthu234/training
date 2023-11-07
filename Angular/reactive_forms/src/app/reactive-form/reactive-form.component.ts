import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms'; //step 2

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit{
  userForm!:FormGroup; //step 3
  constructor(private fb:FormBuilder){}  //step 4
  ngOnInit(): void {
    this.initializeForm()
  }
initializeForm()
  {
    this.userForm=this.fb.group({
      name :[null,[Validators.required]],
      email:[null,[Validators.required]],
      mobilenumber:[null,[Validators.required]]
    });
  }
get form()
  {
    return this.userForm.controls;
  }
  cancel()
  {
    location.reload();
    alert("Are you exit this form");
  }
  submit()
  {
    if(this.userForm.invalid){
      this.userForm.markAllAsTouched();
      return ;
    }
  }

}
