import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Exibition } from '../model/exibition';
import { Observable, map } from 'rxjs';

const baseURL = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root',
})
export class ExibitionService {
  constructor(private http: HttpClient) {}

  getExibitions(): Observable<Exibition[]> {
    return this.http.get(`${baseURL}/exibitions`).pipe(
      map((data: any) => {
        return (data && data.map((elem: any) => new Exibition(elem))) || [];
      })
    );
  }

  getOne(id: number): Observable<Exibition> {
    return this.http.get(`${baseURL}/exibitions/${id}`).pipe(
      map((data: any) => {
        return new Exibition(data);
      })
    );
  }

  add(exibition: Exibition): Observable<Exibition> {
    return this.http.post(`${baseURL}/exibitions`, exibition).pipe(
      map((data: any) => {
        return new Exibition(data);
      })
    );
  }
}
