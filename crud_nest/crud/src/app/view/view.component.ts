import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  getcourse:any;
  all:any;
  constructor (private ser:ServiceService){}
  ngOnInit(): void {
    this.getall();
  }
  getall()
  {
    this.ser.getAllcourse().subscribe((data)=>
    {
        this.getcourse=data;
        this.all=this.getcourse.data;
        console.log("GetCourse",this.getcourse);
        console.log("GetAll",this.all);
      })
  }

}
