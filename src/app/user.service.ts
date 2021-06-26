import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contact } from './models/contact.model';
import { Reservation } from './models/reservation.model';
import { User } from './models/user.model';
const optionRequete = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'mon-entete-personnalise': 'maValeur',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  public register(user: User): Observable<any> {
    return this.http.post(
      `${environment.baseURL}/users/register`,
      user
    ) as Observable<any>;
  }


  updateUser(id, data): Observable<any> {
    //  let _maison={...data};
    return this.http.put(
      `${environment.baseURL}/users/update/${id}`,  data
    ) as Observable<any>;
  }

  GetUsers() {
    return this.http.get(`${environment.baseURL}/users`) as Observable<any>;
  }


  getUserById(id) {
    return this.http.get(
      `${environment.baseURL}/users/${id}`
    ) as Observable<any>;
  }

  public postReservation(reservation: Reservation): Observable<any> {
    return this.http.post(
      `${environment.baseURL}/reservations/reserve`,
      reservation
    ) as Observable<any>;
  }
  deleteReservation(id){
    return this.http.delete(`${environment.baseURL}/delete/${id}`) as Observable<any>;;
  }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  // public updateReservation(id,data): Observable<any> {
  //   return this.http.put( `${environment.baseURL}/reservations/update/${id}`,data) as Observable<any>;
  // }
  GetReservations() {
    return this.http.get(`${environment.baseURL}/reservations`) as Observable<any>;
  }
  public postContact(contact: Contact): Observable<any> {
    return this.http.post(
      `${environment.baseURL}/users/contact`,
      contact
    ) as Observable<any>;
  }
}
