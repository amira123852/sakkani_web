import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }



deleteUser(id){
  return this.http.delete(`${environment.baseURL}/users/delete/${id}`) as Observable<any>;;
}


updateUser(id,user:User):Observable<any>{
   let _user={...user};
  return this.http.put(`${environment.baseURL}/users/update/${id}`,_user) as Observable<any>;
}

GetUsers() {
  return this.http.get(`${environment.baseURL}/users`) as Observable<any>;
}

}

