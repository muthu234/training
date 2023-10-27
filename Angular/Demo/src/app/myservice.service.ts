import { User } from './user';
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
  // apiUrl:string ='https://jsonplaceholder.typicode.com/todos/1'//step 3
  Url:string ='http://localhost:3000';
  url1:any

  

  constructor(private http:HttpClient) { }  //step:2
// getToDos(){
//   return this.http.get(this.apiUrl);  //step:4
// }
getAll()
{
  return this.http.get(this.Url+'/getAllUsers')
}
getbyid(value:any)
  {
    console.log(value);
    return this.http.get(this.Url+'/getUserById/'+value)
  }
  createuser(user:any)
  {
    return this.http.post(this.Url+'/createUser/',user)
  }
  update(User:any)
  {
    console.log(User);
    return this.http.put(this.Url+'/updateUserById/'+User.regno,User)

  }
  del(did:any)
  {
    return this.http.put(this.Url+'/deleteUserById/'+did,{});
  }

} 

