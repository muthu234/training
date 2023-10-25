import { MyserviceService } from './../myservice.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit{
  m:any;
  id:any;
  name:any;
  age:any;
  department:any;
  a:boolean=false
  constructor(private ser:MyserviceService){}
  ngOnInit(): void {
    this.getall();
    
  }
  add()
  {
    this.a=!this.a
  }
  getall(){
    this.ser.getAll().subscribe((data)=>{
      this.m=data;
      console.log(this.m);
      
    })
  }
  getByid(){
    this.ser.getbyid(this.id).subscribe((data)=>{
      console.log(data);
    })
  }
  createuser()
  {
    let user={
      id:this.id,
      name:this.name,
      age:this.age,
      department:this.department
    }
    this.ser.createuser(user).subscribe((data)=>
    {
      this.getall();
    })
  }
 
  

  }



