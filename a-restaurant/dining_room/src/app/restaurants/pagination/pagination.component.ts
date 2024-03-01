import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {

  @Input()
  page: number = 1;

  @Input()
  pageSize: number = 9;

  @Input()
  collectionSize: number = 0;

  @Output()
  pageChange: EventEmitter<number> = new EventEmitter();

  onClick(newPage: number): void {
    this.pageChange.emit(newPage)
  }

}
