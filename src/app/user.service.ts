import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Maison } from './models/maison.model';
import { User } from './models/user.model';
const optionRequete = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    'mon-entete-personnalise':'maValeur'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public register(user:User):Observable<any>{

     return this.http.post(`${environment.baseURL}/users/register`,user) as Observable<any>
  }
  public postMaison(maison: Maison):Observable<any>{

    return this.http.post(`${environment.baseURL}/maisons/add`,maison) as Observable<any>;
}
deleteMaison(id){
  return this.http.delete(`${environment.baseURL}/maisons/delete/${id}`) as Observable<any>;;
}


updateMaison(id,maison:Maison):Observable<any>{
   let _maison={...maison};
  return this.http.put(`${environment.baseURL}/maisons/update/${id}`,_maison) as Observable<any>;
}

GetHouses() {
  return this.http.get(`${environment.baseURL}/maisons`) as Observable<any>;
}
getMaisonById(id){
  return this.http.get(`${environment.baseURL}/maisons/${id}`) as Observable<any>;
}
}

