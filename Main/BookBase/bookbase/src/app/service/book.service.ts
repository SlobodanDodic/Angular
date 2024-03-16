import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { Book, Books } from '../model/book.model';
import { Review } from '../model/review.model';

const baseURL = 'http://localhost:3000/api/books';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  getBooks(params: any): Observable<Books> {
    let options = {};

    if (params) {
      options = {
        params: new HttpParams()
          .set('page', params.page || '')
          .set('pageSize', params.pageSize || '')
          .set(
            'filter',
            (params.filter && JSON.stringify(params.filter)) || ''
          ),
      };
    }

    return this.http.get(baseURL, options).pipe(
      map((data: any) => {
        return new Books(data);
      })
    );
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post(baseURL, book).pipe(
      map((data: any) => {
        return new Book(data);
      })
    );
  }

  getBook(id: number): Observable<Book> {
    return this.http.get(`${baseURL}/${id}`).pipe(
      map((data: any) => {
        return new Book(data);
      })
    );
  }

  editBook(id: number, book: Book): Observable<Book> {
    return this.http.put(`${baseURL}/${id}`, book).pipe(
      map((data: any) => {
        return new Book(data);
      })
    );
  }

  getReviews(id: number): Observable<Review[]> {
    return this.http.get(`${baseURL}/${id}/reviews`).pipe(
      map((data: any) => {
        return data.map((review: any) => {
          return new Review(review);
        });
      })
    );
  }

  deleteReview(reviewId: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/api/reviews/${reviewId}`);
  }
}
