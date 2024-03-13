import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Book } from 'src/app/model/book.model';
import { Review } from 'src/app/model/review.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  bookId: number = 0;
  book: Book = new Book();
  reviews: Review[] = [];
  score: number = 0;

  constructor(private service: BooksService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.bookId = params['bookId'];
      this.getBook();
      this.getReviews();
    });
  }

  getBook(): void {
    this.service.getBook(this.bookId).subscribe({
      next: (book: Book) => {
        this.book = book;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getReviews(): void {
    this.service.getReviews(this.bookId).subscribe({
      next: (reviews: Review[]) => {
        this.reviews = reviews;
        this.score = this.calculateAverageScore();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  calculateAverageScore(): number {
    let total = 0;
    for (let review of this.reviews) {
      total += review.score;
    }
    return total / this.reviews.length;
  }

  onDeleteReview(review: Review): void {
    this.service.deleteReview(review._id).subscribe({
      next: (_review: Review) => {
        this.getReviews();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
