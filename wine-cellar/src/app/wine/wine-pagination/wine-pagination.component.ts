import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'wc-wine-pagination',
  templateUrl: './wine-pagination.component.html',
  styleUrls: ['./wine-pagination.component.css'],
})
export class WinePaginationComponent implements OnInit, OnChanges {
  pages: number[] = [];
  activePage: number = 1;

  @Input() pageCount: number = 0;
  @Output() pageChange: EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
    // this.generatePages();
  }

  generatePages(): void {
    for (let i = 1; i <= this.pageCount; i++) {
      this.pages.push(i);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['pageCount'] &&
      changes['pageCount'].currentValue !== changes['pageCount'].previousValue
    ) {
      this.pages = [];
      for (let i = 1; i <= this.pageCount; i++) {
        this.pages.push(i);
      }
    }
  }

  onPrevious(): void {
    if (this.activePage > 1) {
      this.activePage--;
      this.emitPageChange();
    }
  }

  onPage(page: number): void {
    this.activePage = page;
    this.emitPageChange();
  }

  onNext(): void {
    if (this.activePage < this.pageCount) {
      this.activePage++;
      this.emitPageChange();
    }
  }

  private emitPageChange(): void {
    this.pageChange.emit(this.activePage);
  }
}
