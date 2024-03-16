import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Book } from 'src/app/model/book.model';
import { Review } from 'src/app/model/review.model';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  bookId: number = -1;
  book: Book = new Book();
  score: number = 0;
  reviews: Review[] = [];

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params['bookId']) {
        this.bookId = params['bookId'];
        this.getBook();
        this.getReviews();
      }
    });
  }

  getBook(): void {
    this.bookService.getBook(this.bookId).subscribe({
      next: (book: Book) => {
        this.book = book;
      },
      error: (err: any) => {
        console.log('error: ', err);
      },
    });
  }

  getReviews(): void {
    this.bookService.getReviews(this.bookId).subscribe({
      next: (reviews: Review[]) => {
        this.reviews = reviews;
        this.score = this.averageScore();
      },
      error: (err: any) => {
        console.log('error: ', err);
      },
    });
  }

  deleteReview(review: Review): void {
    this.bookService.deleteReview(review._id).subscribe({
      next: (_review: Review) => {
        this.getReviews();
      },
      error: (err: any) => {
        console.log('error: ', err);
      },
    });
  }

  averageScore(): number {
    let total = 0;
    for (let review of this.reviews) {
      total += review.score;
    }
    return Math.round(total / this.reviews.length);
  }
}
