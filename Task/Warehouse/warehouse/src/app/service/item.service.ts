import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item, ItemList } from '../models/item.model';
import { Observable, map } from 'rxjs';
import { ArticleList } from '../models/article.model';

const baseURL = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private http: HttpClient) {}

  getItems(id: number): Observable<ItemList> {
    return this.http.get(`${baseURL}/documents/${id}/items`).pipe(
      map((data: any) => {
        return data && new ItemList(data);
      })
    );
  }

  getArticles(): Observable<ArticleList> {
    return this.http.get(`${baseURL}/articles`).pipe(
      map((data: any) => {
        return data && new ArticleList(data);
      })
    );
  }

  additem(item: Item, documentId: number): Observable<Item> {
    return this.http
      .post(`${baseURL}/documents/${documentId}/items`, item)
      .pipe(
        map((data: any) => {
          return new Item(data);
        })
      );
  }
}
