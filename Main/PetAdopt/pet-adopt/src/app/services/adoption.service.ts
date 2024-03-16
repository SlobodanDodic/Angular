import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Adoption, AdoptionList } from '../model/adoption.model';

const baseURL = 'http://localhost:3000/api/';

@Injectable({
  providedIn: 'root',
})
export class AdoptionService {
  constructor(private http: HttpClient) {}

  postAdoption(adoption: Adoption): Observable<Adoption> {
    return this.http.post(`${baseURL}adoptions`, adoption).pipe(
      map((data: any) => {
        return new Adoption(data);
      })
    );
  }

  getAll(): Observable<AdoptionList> {
    return this.http.get(`${baseURL}adoptions`).pipe(
      map((data: any) => {
        return new AdoptionList(data);
      })
    );
  }

  deleteOne(id: number): Observable<Adoption> {
    return this.http.delete(`${baseURL}adoptions/${id}`).pipe(
      map((data: any) => {
        return new Adoption(data);
      })
    );
  }
}
