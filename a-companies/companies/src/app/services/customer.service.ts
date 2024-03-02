import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Customer, CustomerList } from '../model/customer.model';

const baseURL = 'http://localhost:3000/api/v2/customers';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<CustomerList> {
    return this.http.get(baseURL).pipe(
      map((data: any) => {
        return new CustomerList(data);
      })
    );
  }

  getSorted(): Observable<CustomerList> {
    return this.http.get(baseURL).pipe(
      map((data: any) => {
        const sortedData = data.results.sort((a: Customer, b: Customer) => {
          return a.company.localeCompare(b.company);
        });
        return new CustomerList({ count: data.count, results: sortedData });
      })
    );
  }

  getFiltered(params?: any): Observable<CustomerList> {
    return this.http.get(baseURL).pipe(
      map((data: any) => {
        const filteredData = data.results.filter((customer: Customer) => {
          return customer.name
            .toLowerCase()
            .includes(params.filter.name.toLowerCase());
        });
        return new CustomerList({
          count: filteredData.length,
          results: filteredData,
        });
      })
    );
  }

  getPage(params?: any): Observable<CustomerList> {
    let options = {};
    if (params) {
      options = {
        params: new HttpParams()
          .set('page', params.page || 1)
          .set('pageSize', params.pageSize || 9),
      };
    }

    return this.http.get(baseURL, options).pipe(
      map((data: any) => {
        return new CustomerList(data);
      })
    );
  }
}
