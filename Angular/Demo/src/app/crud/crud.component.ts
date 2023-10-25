import { MyserviceService } from './../myservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent  implements OnInit{
  student:any;
  ngOnInit(): void {
    this.getall();
  }

  constructor(private ser:MyserviceService){

  }
  getall(){
    this.ser.getAll().subscribe(data =>
    {
      this.student=data;
      console.log(this.student);
    })
  }

}
