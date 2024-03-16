import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Book } from 'src/app/model/book.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
})
export class BookFormComponent implements OnInit {
  bookId: number = -1;
  book: Book = new Book();

  form: FormGroup = new FormGroup({
    ISBN: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    yearOfPublication: new FormControl(0),
    publisher: new FormControl('', Validators.required),
  });

  constructor(
    private service: BooksService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params['bookId']) {
        this.bookId = params['bookId'];
        this.getBook();
      }
    });
  }

  onSubmit(): void {
    if (!this.form.valid) {
      alert('Please fill in all fields');
      return;
    }
    let book = new Book(this.form.value);

    if (this.bookId < 0) {
      this.service.addBook(book).subscribe({
        next: (newBook: Book) => {
          this.router.navigate(['/books', newBook._id]);
        },
        error: (err) => {
          console.log(err);
        },
      });
    } else {
      this.service.updateBook(this.bookId, book).subscribe({
        next: (newBook: Book) => {
          this.router.navigate(['/books', newBook._id]);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  getBook(): void {
    this.service.getBook(this.bookId).subscribe({
      next: (book: Book) => {
        this.book = book;
        this.setEditForm();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  setEditForm(): void {
    this.form = new FormGroup({
      ISBN: new FormControl(this.book.ISBN, Validators.required),
      title: new FormControl(this.book.title, Validators.required),
      author: new FormControl(this.book.author, Validators.required),
      yearOfPublication: new FormControl(this.book.yearOfPublication),
      publisher: new FormControl(this.book.publisher, Validators.required),
    });
  }
}
