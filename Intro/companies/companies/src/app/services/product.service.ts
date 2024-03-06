import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product, ProductList } from '../model/product.model';

const baseURL = 'http://localhost:3000/api/v2/products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<ProductList> {
    return this.http.get(baseURL).pipe(
      map((data: any) => {
        return new ProductList(data);
      })
    );
  }

  getSorted(params?: any): Observable<ProductList> {
    let options = {};
    if (params) {
      options = {
        params: new HttpParams().set('sort', 'priceRsd'),
      };
    }

    return this.http.get(baseURL, options).pipe(
      map((data: any) => {
        return new ProductList(data);
      })
    );
  }

  getFiltered(params?: any): Observable<ProductList> {
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
        return new ProductList(data);
      })
    );
  }

  getPage(params?: any): Observable<ProductList> {
    let options = {};
    if (params) {
      options = {
        params: new HttpParams()
          .set('page', params.page || 1)
          .set('pageSize', params.pageSize || 10),
      };
    }

    return this.http.get(baseURL, options).pipe(
      map((data: any) => {
        return new ProductList(data);
      })
    );
  }
}
