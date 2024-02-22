import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'wc-wine-pagination',
  templateUrl: './wine-pagination.component.html',
  styleUrls: ['./wine-pagination.component.css'],
})
export class WinePaginationComponent implements OnInit {
  @Input() pageCount: number = 0;

  pages: number[] = [];

  activePage: number = 1;

  @Output() pageChange: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    for (let i = 1; i <= this.pageCount; i++) {
      this.pages.push(i);
      this.emitPageChange();
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
