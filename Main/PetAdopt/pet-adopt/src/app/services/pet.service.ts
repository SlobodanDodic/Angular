import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Adopt, AdoptList } from 'src/model/adopt.model';
import { Pet, PetList } from 'src/model/pet.model';

const baseURL = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  constructor(private http: HttpClient) {}

  getPets(params: any): Observable<PetList> {
    let options = {};

    if (params) {
      options = {
        params: new HttpParams()
          .set('sort', params.sort || '')
          .set('sortDirection', params.sortDirection || '')
          .set('page', params.page || 1)
          .set('pageSize', params.pageSize || 4)
          .set(
            'filter',
            (params.filter && JSON.stringify(params.filter)) || ''
          ),
      };
    }

    return this.http.get(`${baseURL}/pets`, options).pipe(
      map((data: any) => {
        return new PetList(data);
      })
    );
  }

  getPet(id: number): Observable<Pet> {
    return this.http.get(`${baseURL}/pets/${id}`).pipe(
      map((data: any) => {
        return new Pet(data);
      })
    );
  }

  getCategories(): Observable<string[]> {
    return this.http.get(`${baseURL}/categories`).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  submitRequest(adopt: Adopt): Observable<any> {
    return this.http.post(`${baseURL}/adoptions`, adopt);
  }

  getAdoptedPets(): Observable<AdoptList> {
    return this.http.get(`${baseURL}/adoptions`).pipe(
      map((data: any) => {
        return new AdoptList(data);
      })
    );
  }

  approveAdoption(petId: number): Observable<Adopt> {
    console.log(petId);
    return this.http.delete(`${baseURL}/adoptions/${petId}`).pipe(
      map((data: any) => {
        return new Adopt(data);
      })
    );
  }

  reset(): Observable<any> {
    return this.http.get(`${baseURL}/reset`);
  }
}
