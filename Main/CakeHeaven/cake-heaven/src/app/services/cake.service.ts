import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { Cake } from '../model/cake.model';

const baseURL = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root',
})
export class CakeService {
  constructor(private http: HttpClient) {}

  getCakes(params: any): Observable<Cake[]> {
    let options = {};

    if (params) {
      options = {
        params: new HttpParams()
          .set('sort', params.sort || '')
          .set('sortDirection', params.sortDirection || '')
          .set(
            'filter',
            (params.filter && JSON.stringify(params.filter)) || ''
          ),
      };
    }

    return this.http.get(`${baseURL}/cakes`, options).pipe(
      map((data: any) => {
        return data.map((cake: Cake) => new Cake(cake));
      })
    );
  }

  getIngredients(): Observable<string[]> {
    return this.http.get(`${baseURL}/ingredients`).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  getCake(id: number): Observable<Cake> {
    return this.http.get(`${baseURL}/cakes/${id}`).pipe(
      map((data: any) => {
        return new Cake(data);
      })
    );
  }
}
