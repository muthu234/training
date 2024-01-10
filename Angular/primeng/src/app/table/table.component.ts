import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyserviceService } from '../myservice.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  product = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    department: 'IT',
    gender: 'Male',
    mobileNumber: '123-456-7890',
  };
  // products!: any[];
  userForm!: FormGroup;
ingredient:any
editform!:FormGroup;
details:any
form: any;
alldetails:any;
sidebarVisible: boolean=false;
  edit!: user;
constructor(private fb:FormBuilder ,private ser:MyserviceService){
  this.editform = this.fb.group({
    name : [],
    designation :[]
  });
}
ngOnInit():void
{
  // this.getall();
  // this.initializeForm();
}
private initializeForm(): void {
  this.userForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    age: ['', [Validators.required, Validators.min(1)]],
    department: ['', Validators.required],
    gender: ['', Validators.required],
    mobileNumber:['',Validators.required]
  });
}
// sum()
// {
//   console.log(this.userForm.value);
  
// }

Cancel()
{
  alert("exit");
}
save(){
  alert("save");
}

sidebarVisible1()
{
  this.sidebarVisible = true ;
}

getall() {
  this.ser.getallEmp().subscribe((data) => {
    this.details = data;
    this.alldetails=this.details.data
    console.log("iiiiiiiiiiiiiiiiiiiiiiiiii",this.alldetails);
  });
}
createEmp()
{
  console.log('CreateEmp:',this.userForm.value);
  this.ser.createEmp(this.userForm.value).subscribe((data:any)=>{
  })
}
editEmp(id:number)
{
  this.ser.EditEmp(id).subscribe((res:any)=>
  {
    console.log("EditEmp",res.data);
    this.edit = res.data;
    console.log('ddddddddddddddddddddddddd',this.edit);
    
    this.userForm.patchValue(this.edit);
  })
  
}
}

interface user{
  firstName:string,
  lastName: string,
  age: number,
  department: string,
  gender: string,
  mobileNumber:string
}
