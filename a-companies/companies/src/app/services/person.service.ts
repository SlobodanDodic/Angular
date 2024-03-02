import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Person, PersonList } from '../model/person.model';

// const baseURL = 'http://localhost:3000/api/person';
const baseURL = 'http://localhost:3000/api/v2/person';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<PersonList> {
    return this.http.get(baseURL).pipe(
      map((data: any) => {
        return new PersonList(data);
      })
    );
  }

  getSorted(params?: any): Observable<PersonList> {
    return this.http.get(baseURL).pipe(
      map((data: any) => {
        const sortedData = data.results.sort((a: Person, b: Person) => {
          return b._id - a._id;
        });
        return new PersonList({ count: data.count, results: sortedData });
      })
    );
  }

  // getFiltered(params?: any): Observable<PersonList> {
  //   let options = {};
  //   if (params) {
  //     options = {
  //       params: new HttpParams().set(
  //         'filter',
  //         (params.filter && JSON.stringify(params.filter)) || ''
  //       ),
  //     };
  //   }

  //   return this.http.get(baseURL, options).pipe(
  //     map((data: any) => {
  //       return data;
  //     })
  //   );
  // }

  getFiltered(params?: any): Observable<PersonList> {
    return this.http.get(baseURL).pipe(
      map((data: any) => {
        const filteredData = data.results.filter((person: Person) => {
          return person.isActive === params.filter.idActive;
        });
        return new PersonList({
          count: filteredData.length,
          results: filteredData,
        });
      })
    );
  }

  getPage(params?: any): Observable<PersonList> {
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
        return new PersonList(data);
      })
    );
  }
}
