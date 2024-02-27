const baseUrl = 'http://localhost:3000/api/movies';

import { Injectable } from '@angular/core';
import { Movie } from './model/movie';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private httpClient: HttpClient) {}

  readAll(): Observable<any> {
    return this.httpClient.get(baseUrl);
  }

  read(id: number): Observable<any> {
    return this.httpClient.get(baseUrl + '/' + id);
  }

  create(movie: Movie): Observable<any> {
    return this.httpClient.post(baseUrl, movie);
  }

  update(movie: Movie): Observable<any> {
    return this.httpClient.put(baseUrl + '/' + movie.id, movie);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(baseUrl + '/' + id);
  }
}
