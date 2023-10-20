import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//step:1

@Injectable({providedIn: 'root'})
export class ServiceNameService {
  constructor(private httpClient: HttpClient) { }
 }
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  apiUrl:string ='https://jsonplaceholder.typicode.com/todos/1'//step 3
  Url:string ='http://localhost:3008'

  constructor(private http:HttpClient) { }//step:2
getToDos(){
  return this.http.get(this.apiUrl);//step:4
}
getAll()
{
  return this.http.get(this.Url+'/getAllUsers')
}
  getStudents(){
  return [
  {name:'muthu',age:21,RegNO:21504301},
  {name:'kumar',age:23,RegNO:21504302},
  {name:'mani',age:24,RegNO:21504303},
  {name:'vel',age:22,RegNO:21504304},
];
  } 
}
