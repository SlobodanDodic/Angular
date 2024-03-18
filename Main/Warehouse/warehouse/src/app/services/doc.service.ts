import { Injectable } from '@angular/core';
import { Doc, DocList } from '../model/doc.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ArticleList } from '../model/article.model';
import { Item, ItemList } from '../model/item.model';

const baseURL = 'http://localhost:3000/api/documents';

@Injectable({
  providedIn: 'root',
})
export class DocService {
  constructor(private http: HttpClient) {}

  getDocs(params: any): Observable<DocList> {
    let options = {};

    if (params) {
      options = {
        params: new HttpParams()
          .set('sort', params.sort || '')
          .set('sortDirection', params.sortDirection || '')
          .set('page', params.page || '')
          .set('pageSize', params.pageSize || ''),
      };
    }

    return this.http.get(baseURL, options).pipe(
      map((data: any) => {
        return new DocList(data);
      })
    );
  }

  getDoc(id: number): Observable<Doc> {
    return this.http.get(`${baseURL}/${id}`).pipe(
      map((data: any) => {
        return new Doc(data);
      })
    );
  }

  getArticles(): Observable<ArticleList> {
    return this.http.get('http://localhost:3000/api/articles').pipe(
      map((data: any) => {
        return new ArticleList(data);
      })
    );
  }

  getItems(docId: number): Observable<ItemList> {
    return this.http.get(`${baseURL}/${docId}/items`).pipe(
      map((data: any) => {
        return new ItemList(data);
      })
    );
  }

  addItem(docId: number, item: Item): Observable<Item> {
    return this.http.post(`${baseURL}/${docId}/items`, item).pipe(
      map((data: any) => {
        return new Item(data);
      })
    );
  }

  editDoc(docId: number, dateNow: Date): Observable<Doc> {
    return this.http.put(`${baseURL}/${docId}`, dateNow).pipe(
      map((data: any) => {
        return new Doc(data);
      })
    );
  }

  recordDocument(docId: number, body: Doc): Observable<Doc> {
    return this.http.put(`${baseURL}/${docId}`, body).pipe(
      map((data: any) => {
        return new Doc(data);
      })
    );
  }
}
