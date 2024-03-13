import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';
import { Books } from '../model/book.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books: Books = new Books();

  queryParams = {
    page: 1,
    pageSize: 10,
    filter: {
      author: '',
      title: '',
    },
  };

  // opcija 1:
  searchControl: FormControl = new FormControl('');
  radioFormGroup: FormGroup = new FormGroup({
    filter: new FormControl('title'),
  });

  constructor(private service: BooksService) {}

  //opcija 2:
  // constructor(private service: BooksService) {
  //   this.searchControl = new FormControl('');
  //   this.radioFormGroup = new FormGroup({
  //     filter: new FormControl('title'),
  //   });
  // }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.queryParams.page = 1;
    this.service.getBooks(this.queryParams).subscribe({
      next: (books) => {
        this.books = books;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  search(): void {
    if (this.radioFormGroup.value.filter == 'title') {
      this.queryParams.filter.author = '';
      this.queryParams.filter.title = this.searchControl.value;
    } else if (this.radioFormGroup.value.filter == 'author') {
      this.queryParams.filter.author = this.searchControl.value;
      this.queryParams.filter.title = '';
    } else {
      return;
    }
    this.getBooks();
  }

  loadMore(): void {
    this.queryParams.page += 1;
    this.service.getBooks(this.queryParams).subscribe({
      next: (books) => {
        this.books.results = this.books.results.concat(books.results);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
