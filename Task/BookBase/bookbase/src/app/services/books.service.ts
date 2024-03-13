import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book, Books } from '../model/book.model';
import { Observable, map } from 'rxjs';
import { Review } from '../model/review.model';

const baseURL = 'http://localhost:3000/api/books';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
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

  getBook(bookId: number): Observable<Book> {
    return this.http.get(`${baseURL}/${bookId}`).pipe(
      map((data: any) => {
        return new Book(data);
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

  updateBook(bookId: number, book: Book) {
    return this.http.put(`${baseURL}/${bookId}`, book).pipe(
      map((data: any) => {
        return new Book(data);
      })
    );
  }

  getReviews(bookId: number): Observable<Review[]> {
    return this.http.get(`${baseURL}/${bookId}/reviews`).pipe(
      map((data: any) => {
        return (data && data.map((elem: any) => new Review(elem))) || [];
      })
    );
  }

  deleteReview(reviewId: number): Observable<Review> {
    return this.http
      .delete(`http://localhost:3000/api/reviews/${reviewId}`)
      .pipe(
        map((data: any) => {
          return new Review(data);
        })
      );
  }
}
