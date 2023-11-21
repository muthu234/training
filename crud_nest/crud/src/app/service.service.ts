import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient: HttpClient) { }
  url:string="http://localhost:3000/User";

  getAllcourse()
  {
    return this.httpClient.get(this.url+"/getcourse")
  }
  updatecourse(id:number,obj:any){
    return this.httpClient.put(this.url+"/updateCourse",id)
  }
  
  
}
