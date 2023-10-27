import { MyserviceService } from './../myservice.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit{
  m:any;
  regno:any;
  uid:any;
  name:any;
  age:any;
  did:any;
  d:any;
  department:any;
  a:boolean=false
  u:boolean=false
  get_id!:any;
  get_data:any;
  get_name:any;
  get_age:any;
  get_department:any;
  constructor(private ser:MyserviceService){}
  ngOnInit(): void {
    this.getall();
    
  }
  add()
  {
    this.a=!this.a
  }
  udate()
  {
    this.u=!this.u
  }
  de(){
    this.d=!this.d
  }
  getall(){
    this.ser.getAll().subscribe((data)=>{
      this.m=data;
      // console.log(this.m);
      
    })
  }
  getByid(){
    console.log(this.regno);
    this.ser.getbyid(this.regno).subscribe((data)=>{
      console.log(data);
      this.get_data=data;
     this.get_name=this.get_data[0].name;
     this.get_age=this.get_data[0].age;
     this.get_department=this.get_data[0].department;
    //  console.log(this.name);
    })
  }
  createuser()
  {
    let user={
      regno:this.regno,
      name:this.name,
      age:this.age,
      department:this.department
    }
    this.ser.createuser(user).subscribe((data)=>
    {
      this.getall();
    })
  }
  update(){
    let user={
      regno:this.regno,
      name:this.get_name,
      age:this.get_age,
      department:this.get_department
    }
    this.ser.update(user).subscribe((data)=>
    {
      this.getall();
    });
  }
  del(){
      this.ser.del(this.regno).subscribe((data)=>
      {
        this.getall();
      });
  }
 
  

  }



