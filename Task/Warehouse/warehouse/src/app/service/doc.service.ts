import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DocumentList, Document } from '../models/document.model';
import { Observable, map } from 'rxjs';

const baseURL = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root',
})
export class DocService {
  constructor(private http: HttpClient) {}

  getDocuments(params?: any): Observable<DocumentList> {
    let options = {};
    if (params) {
      options = {
        params: new HttpParams()
          .set('sort', params.sort || '')
          .set('sortDirection', params.sortDirection || '')
          .set('page', params.page || 1)
          .set('pageSize', params.pageSize || 10),
      };
    }

    return this.http.get(`${baseURL}/documents`, options).pipe(
      map((data: any) => {
        return data && new DocumentList(data);
      })
    );
  }

  getDocument(id: number): Observable<Document> {
    return this.http.get(`${baseURL}/documents/${id}`).pipe(
      map((data: any) => {
        return data && new Document(data);
      })
    );
  }

  recordDocument(body: Document, id: number): Observable<Document> {
    return this.http.put(`${baseURL}/documents/${id}`, body).pipe(
      map((data: any) => {
        return data && new Document(data);
      })
    );
  }
}
