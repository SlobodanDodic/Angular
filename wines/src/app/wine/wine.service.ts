const baseUrl = 'http://localhost:3000/api/wines';

import { Injectable } from '@angular/core';
import { Wine } from './model/wine';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WineService {
  constructor(private httpClient: HttpClient) {}

  create(wine: Wine): Observable<any> {
    return this.httpClient.post(baseUrl, wine);
  }

  read(id: number): Observable<any> {
    return this.httpClient.get(baseUrl + '/' + id);
  }

  readAll(): Observable<any> {
    return this.httpClient.get(baseUrl);
  }

  update(wine: Wine): Observable<any> {
    return this.httpClient.put(baseUrl + '/' + wine.id, wine);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(baseUrl + '/' + id);
  }
}
