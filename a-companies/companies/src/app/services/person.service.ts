import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Person } from '../model/person.model';

const baseURL = 'http://localhost:3000/api/person';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Array<Person>> {
    return this.http.get(baseURL).pipe(
      map((data: any) => {
        return new Array<Person>(data);
      })
    );
  }

  getSorted(params?: any): Observable<Array<Person>> {
    let options = {};
    if (params) {
      options = {
        params: new HttpParams().set('sort', '_id'),
      };
    }

    return this.http.get(baseURL, options).pipe(
      map((data: any) => {
        return new Array<Person>(
          data.sort((a: Person, b: Person) => b._id - a._id)
        );
      })
    );
  }

  getFiltered(params?: any): Observable<Array<Person>> {
    let options = {};
    if (params) {
      options = {
        params: new HttpParams().set(
          'filter',
          (params.filter && JSON.stringify(params.filter)) || ''
        ),
      };
    }

    return this.http.get(baseURL, options).pipe(
      map((data: any) => {
        return data.filter((person: any) => person.isActive);
        // return data.filter((person: any) => person.isActive === false);
      })
    );
  }

  getPage(params?: any): Observable<Array<Person>> {
    let options = {};
    if (params) {
      options = {
        params: new HttpParams()
          .set('page', params.page || 3)
          .set('pageSize', params.pageSize || 4),
      };
    }

    return this.http.get(baseURL, options).pipe(
      map((data: any) => {
        return new Array<Person>(data);
      })
    );
  }
}
