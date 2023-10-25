import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  student:any[]=[];
  toDo:any[]=[]; //step 5:1
  a:any;
  constructor(private myservice:MyserviceService){}
  ngOnInit(): void {
    this.myservice.getAll().subscribe((data)=>
    {
        this.a=data
    })
    // this.student=this.myservice.getStudents();
    // this.myservice.getToDos().subscribe((data:any) =>//step:5:2
    // {
    //   //step:5:2
    //   this.toDo=data;
    // });
  }
}
// --------------
//another method
// import { MyserviceService } from './../myservice.service';
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-crud',
//   templateUrl: './crud.component.html',
//   styleUrls: ['./crud.component.scss']
// })
// export class CrudComponent  implements OnInit{
//   student:any;
//   ngOnInit(): void {
//     this.getall();
//   }

//   constructor(private ser:MyserviceService){

//   }
//   getall(){
//     this.ser.getAll().subscribe(data =>
//     {
//       this.student=data;
//       console.log(this.student);
//     })
//   }

// }

