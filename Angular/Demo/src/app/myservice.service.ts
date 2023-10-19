import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }
  getStudents(){
  return [
  {name:'muthu',age:21,RegNO:21504301},
  {name:'kumar',age:23,RegNO:21504302},
  {name:'mani',age:24,RegNO:21504303},
  {name:'vel',age:22,RegNO:21504304},
];

  } 
}
