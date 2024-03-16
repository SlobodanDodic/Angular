import { Component, OnInit } from '@angular/core';
import { Books } from '../model/book.model';
import { BookService } from '../service/book.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books: Books = new Books();
  ingredients: string[] = [];

  params = {
    page: 1,
    pageSize: 10,
    filter: {
      author: '',
      title: '',
    },
  };

  searchControl: FormControl = new FormControl('');
  radioFormGroup: FormGroup = new FormGroup({
    filter: new FormControl('title'),
  });

  constructor(private service: BookService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.params.page = 1;
    this.service.getBooks(this.params).subscribe({
      next: (books: Books) => {
        this.books = books;
      },
      error: (err: any) => {
        console.log('error: ', err);
      },
    });
  }

  onSearch(): void {
    if (this.radioFormGroup.value.filter == 'title') {
      this.params.filter.author = '';
      this.params.filter.title = this.searchControl.value;
    } else if (this.radioFormGroup.value.filter == 'author') {
      this.params.filter.title = '';
      this.params.filter.author = this.searchControl.value;
    } else {
      return;
    }
    this.getBooks();
  }

  loadMore(): void {
    this.params.page += 1;
    this.service.getBooks(this.params).subscribe({
      next: (books: Books) => {
        this.books.results = this.books.results.concat(books.results);
      },
      error: (err: any) => {
        console.log('error: ', err);
      },
    });
  }
}
