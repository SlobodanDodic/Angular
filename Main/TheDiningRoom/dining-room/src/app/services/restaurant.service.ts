import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { RestaurantList } from '../model/restaurant.model';
import { MenuList } from '../model/menu.model';

const baseURL = 'http://localhost:3000/api/restaurants';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  constructor(private http: HttpClient) {}

  getRestaurants(params: any): Observable<RestaurantList> {
    let options = {};

    if (params) {
      options = {
        params: new HttpParams()
          .set('sort', 'price')
          .set('sortDirection', 'desc')
          .set('page', params.page || 1)
          .set('pageSize', params.pageSize || 12)
          .set(
            'filter',
            (params.filter && JSON.stringify(params.filter)) || ''
          ),
      };
    }

    return this.http.get(baseURL, options).pipe(
      map((data: any) => {
        return new RestaurantList(data);
      })
    );
  }

  getMenuList(id: number): Observable<MenuList> {
    return this.http.get(`${baseURL}/${id}/menus`).pipe(
      map((data: any) => {
        return new MenuList(data);
      })
    );
  }
}
