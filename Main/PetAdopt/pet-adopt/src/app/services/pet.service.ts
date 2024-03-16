import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Pet, PetList } from '../model/pet.model';

const baseURL = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  constructor(private http: HttpClient) {}

  getPets(params?: any): Observable<PetList> {
    let queryParams = {};
    if (params) {
      queryParams = {
        params: new HttpParams()
          .set('filter', (params.filter && JSON.stringify(params.filter)) || '')
          .set('sort', params.sort || ''),
      };
    }

    return this.http.get(`${baseURL}/pets`, queryParams).pipe(
      map((data: any) => {
        return data && new PetList(data);
      })
    );
  }

  getPet(id: number): Observable<Pet> {
    return this.http.get(`${baseURL}/pets/${id}`).pipe(
      map((elem: any) => {
        return new Pet(elem);
      })
    );
  }

  getCategories(): Observable<string[]> {
    return this.http.get(`${baseURL}/categories`).pipe(
      map((data: any) => {
        return data && data.map((category: string) => category);
      })
    );
  }
}
