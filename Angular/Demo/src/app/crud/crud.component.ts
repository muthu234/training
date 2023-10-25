import { MyserviceService } from './../myservice.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit{
  m:any;
  constructor(private ser:MyserviceService){}
  ngOnInit(): void {
    this.getall();
    
  }
  a:boolean=false
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

  }



