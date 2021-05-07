import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Maison } from './models/maison.model';


@Injectable({
  providedIn: 'root'
})
export class MaisonService {
  error(error: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }



create(type_immobilier : string, description: string, photo_url : string , prix : string) {
  return this.http.post<any>(`${environment.baseURL}maisons/add`,
  { type_immobilier,description,photo_url,prix });
}

update(id: string, params: any) {
  return this.http.put(`${environment.baseURL}/${id}`, params);
}

delete(id: string) {
  return this.http.delete(`${environment.baseURL}/${id}`);
}
}
