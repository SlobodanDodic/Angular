const baseUrl = 'http://localhost:3000/api/pizzas';

import { Injectable } from '@angular/core';
import { Pizza } from './model/pizza';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  constructor(private httpClient: HttpClient) {}

  create(pizza: Pizza): Observable<any> {
    return this.httpClient.post(baseUrl, pizza);
  }

  read(id: number): Observable<any> {
    return this.httpClient.get(baseUrl + '/' + id);
  }

  readAll(): Observable<any> {
    return this.httpClient.get(baseUrl);
  }

  update(pizza: Pizza): Observable<any> {
    return this.httpClient.put(baseUrl + '/' + pizza.id, pizza);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(baseUrl + '/' + id);
  }
}
