import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { RestaurantList } from '../model/restaurant';

const baseURL = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  constructor(private http: HttpClient) {}

  getRestaurants(): Observable<RestaurantList> {
    return this.http.get(`${baseURL}/restaurants`).pipe(
      map((data: any) => {
        return new RestaurantList(data);
      })
    );
  }
}
