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

  getMaisonById(id: string): Observable<any> {
    const url = `${environment.baseURL}/${id}`;
    return this.http.get<Maison>(url).pipe(
      catchError(this.handleError)
    );
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
