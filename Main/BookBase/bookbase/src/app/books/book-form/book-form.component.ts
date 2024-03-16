import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Book } from 'src/app/model/book.model';
import { BookService } from 'src/app/service/book.service';
import { ToastService } from 'src/app/service/toast.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
})
export class BookFormComponent {
  bookId: number = -1;
  book: Book = new Book();

  bookForm: FormGroup = new FormGroup({
    ISBN: new FormControl(this.book.ISBN, [Validators.required]),
    title: new FormControl(this.book.title, [Validators.required]),
    author: new FormControl(this.book.author, [Validators.required]),
    yearOfPublication: new FormControl(this.book.yearOfPublication, [
      Validators.required,
    ]),
    publisher: new FormControl(this.book.publisher, [Validators.required]),
  });

  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params['bookId']) {
        this.bookId = params['bookId'];
        this.getBook();
      }
    });
  }

  getBook(): void {
    this.bookService.getBook(this.bookId).subscribe({
      next: (book: Book) => {
        this.book = book;
        this.setEditForm();
      },
      error: (err: any) => {
        console.log('error: ', err);
      },
    });
  }

  onSubmit(): void {
    if (!this.bookForm.valid) {
      this.toastService.show('Please fill in all fields!', {
        classname: 'bg-warning text-light',
      });
      return;
    } else {
      this.bookId < 0 ? this.addBook() : this.editBook();
    }
  }

  addBook(): void {
    const newBook: Book = new Book(this.bookForm.value);

    this.bookService.addBook(newBook).subscribe({
      next: (_data: any) => {
        this.toastService.show('Book added successfully!', {
          classname: 'bg-success text-light',
        });
        this.bookForm.reset();
        this.router.navigate(['/books']);
      },
      error: (err: any) => {
        console.log('error: ', err);
      },
    });
  }

  editBook(): void {
    const newBook: Book = new Book(this.bookForm.value);
    newBook._id = this.bookId;

    this.bookService.editBook(this.bookId, newBook).subscribe({
      next: (_data: any) => {
        this.toastService.show('Book edited successfully!', {
          classname: 'bg-success text-light',
        });
        this.router.navigate(['/books', this.bookId]);
      },
      error: (err: any) => {
        console.log('error: ', err);
      },
    });
  }

  setEditForm(): void {
    this.bookForm = new FormGroup({
      ISBN: new FormControl(this.book.ISBN, [Validators.required]),
      title: new FormControl(this.book.title, [Validators.required]),
      author: new FormControl(this.book.author, [Validators.required]),
      yearOfPublication: new FormControl(this.book.yearOfPublication, [
        Validators.required,
      ]),
      publisher: new FormControl(this.book.publisher, [Validators.required]),
    });
  }
}
