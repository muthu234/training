import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  student:any[]=[];
  constructor(private myservice:MyserviceService){}
  ngOnInit(): void {
    this.student=this.myservice.getStudents();
  }
}

