import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Company, CompanyList } from '../model/company.model';

const baseURL = 'http://localhost:3000/api/v2/companies';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<CompanyList> {
    return this.http.get(baseURL).pipe(
      map((data: any) => {
        return new CompanyList(data);
      })
    );
  }

  // getSorted(): Observable<CompanyList> {
  //   return this.http.get(baseURL).pipe(
  //     map((data: any) => {
  //       const sortedData = data.results.sort((a: Company, b: Company) => {
  //         return a.name.localeCompare(b.name);
  //       });
  //       return new CompanyList({ count: data.count, results: sortedData });
  //     })
  //   );
  // }

  getSorted(params?: any): Observable<CompanyList> {
    let options = {};
    if (params) {
      // Kreiranje novih HttpParams objekata
      let httpParams = new HttpParams();

      // Postavljanje sortiranja ako su prosleđeni u params
      if (params.sort) {
        httpParams = httpParams.set('sort', params.sort);
      }
      if (params.sortDirection) {
        httpParams = httpParams.set('sortDirection', params.sortDirection);
      }

      // Postavljanje HttpParams objekta u options zahteva
      options = { params: httpParams };
    }

    return this.http.get(baseURL, options).pipe(
      map((data: any) => {
        return new CompanyList(data);
      })
    );
  }

  getFiltered(params?: any): Observable<CompanyList> {
    return this.http.get(baseURL).pipe(
      map((data: any) => {
        const filteredData = data.results.filter((company: Company) => {
          return company.address
            .toLowerCase()
            .includes(params.filter.address.toLowerCase());
        });
        return new CompanyList({
          count: filteredData.length,
          results: filteredData,
        });
      })
    );
  }

  getPage(params?: any): Observable<CompanyList> {
    let options = {};
    if (params) {
      options = {
        params: new HttpParams()
          .set('page', params.page || 1)
          .set('pageSize', params.pageSize || 7),
      };
    }

    return this.http.get(baseURL, options).pipe(
      map((data: any) => {
        return new CompanyList(data);
      })
    );
  }
}
