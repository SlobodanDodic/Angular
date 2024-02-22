import { Component, OnInit } from '@angular/core';
import { Wine } from '../model/wine';
import { WINES } from '../data/wines';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'wc-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css'],
})
export class WineListComponent implements OnInit {
  wines: Wine[] = [];

  WINE_PER_PAGE: number = 5;

  pageCount: number = Math.ceil(WINES.length / this.WINE_PER_PAGE);

  currentPage: number = 1;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.onPageChange(1);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    const startIdx = (page - 1) * this.WINE_PER_PAGE;
    const endIdx = startIdx + this.WINE_PER_PAGE;
    this.wines = WINES.slice(startIdx, endIdx).map((wine) => new Wine(wine));
  }

  onSubmit(): void {
    let id: number = Number(this.route.snapshot.params['id']);
    console.log(id);
  }
}
