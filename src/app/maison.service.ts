import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams, HttpRequest } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
//import { Maison } from '../maison';
import { environment } from 'src/environments/environment';
import { Maison } from './models/maison.model';


@Injectable({
  providedIn: 'root'
})
export class MaisonService {

  constructor(private http:HttpClient) { }
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }


  public postMaison(maison: Maison): Observable<any> {
    return this.http.post(
      `${environment.baseURL}/maisons/add`,
      maison
    ) as Observable<any>;
  }

  deleteMaison(id) {
    return this.http.delete(
      `${environment.baseURL}/maisons/delete/${id}`
    ) as Observable<any>;
  }

  updateMaison(id, data): Observable<any> {
    //let _maison={...data};

    return this.http.put(`${environment.baseURL}/maisons/update/${id}`,data) as Observable<any>;
  }
  GetHouses() {
    return this.http.get(`${environment.baseURL}/maisons`) as Observable<any>;
  }
  getMaisonById(id) {
    return this.http.get(
      `${environment.baseURL}/maisons/${id}`
    ) as Observable<any>;
  }

  getMaisonByuserId(id):Observable<any> {
    return this.http.get(
      `${environment.baseURL}/maisons/annonceur/${id}`
    ) as Observable<any>;
  }

  addMaison(maison: Maison, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('type_immobilier', maison.type_immobilier);
    formData.append('file', file);
    formData.append('prix', maison.prix);
    const header = new HttpHeaders();
    const params = new HttpParams();

    const options = {
      params,
      reportProgress: true,
      headers: header
    };
    const req = new HttpRequest('POST',environment.baseURL, formData, options);
    return this.http.request(req);
  }
}
