import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Slideshow } from '../model/slideshow.model';
import { Cake } from '../model/cake.model';

const baseURL = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root',
})
export class CakeService {
  constructor(private http: HttpClient) {}

  getCarousel(): Observable<Slideshow[]> {
    return this.http.get(`${baseURL}/slideshow`).pipe(
      map((data: any) => {
        return (data && data.map((elem: any) => new Slideshow(elem))) || [];
      })
    );
  }

  getCakes(params?: any): Observable<Cake[]> {
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
        return (data && data.map((elem: any) => new Cake(elem))) || [];
      })
    );
  }

  getIngredients(): Observable<string[]> {
    return this.http.get(`${baseURL}/ingredients`).pipe(
      map((data: any) => {
        return data as Array<string>;
      })
    );
  }

  getCakeDetails(id: number): Observable<Cake> {
    return this.http.get(`${baseURL}/cakes/${id}`).pipe(
      map((elem: any) => {
        return new Cake(elem);
      })
    );
  }
}
