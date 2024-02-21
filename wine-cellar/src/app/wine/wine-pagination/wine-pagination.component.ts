import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wc-wine-pagination',
  templateUrl: './wine-pagination.component.html',
  styleUrls: ['./wine-pagination.component.css'],
})
export class WinePaginationComponent implements OnInit {
  @Input() pageCount: number = 1;

  public pages: number[] = [];

  public activePage: number = 1;

  constructor() {}

  ngOnInit(): void {
    for (let i = 1; i <= this.pageCount; i++) {
      this.pages.push(i);
    }
  }

  onPrevious(): void {
    if (this.activePage > 1) {
      this.activePage--;
    }
  }

  onPage(page: number): void {
    this.activePage = page;
  }

  onNext(): void {
    if (this.activePage < this.pageCount) {
      this.activePage++;
    }
  }
}
