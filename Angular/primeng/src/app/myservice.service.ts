import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

apiUrl='http://localhost:3000/register'
url='http://localhost:3000/virtualscroll'
  constructor( private httpClient:HttpClient) { }
  getallEmp(){
    return this.httpClient.get(this.apiUrl+'/getdetails')
  }
  getallEmployee(){
    return this.httpClient.get(this.url+'/getEmp')
  }
  postEmp(data:any){
    return this.httpClient.post(this.url+'/postEmp',data)
  }
  createEmp(data:any)
  {
    console.log("jjjjjjjjjjjjjjj",data);
    return this.httpClient.post(this.apiUrl+'/createEmp',data)
  }
  EditEmp(id:number)
  {
    console.log("EditEmp:",id);
    return this.httpClient.get(this.apiUrl+'/EditEmp/'+ id)
    
  }
}
