import { Component, Input } from '@angular/core';
import { Book } from 'src/app/model/book.model';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css'],
})
export class BookItemComponent {
  @Input() book: Book = new Book();
  @Input() score: number = -1;
}
