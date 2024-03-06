import { Component, OnInit } from '@angular/core';
import { Wine } from '../model/wine';
import { ActivatedRoute } from '@angular/router';
import { WineService } from '../wine-service/wine.service';

@Component({
  selector: 'wc-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css'],
})
export class WineListComponent implements OnInit {
  wines: Wine[] = [];
  WINE_PER_PAGE: number = 5;
  currentPage: number = 1;
  pageCount: number = 0;

  constructor(
    private route: ActivatedRoute,
    private wineService: WineService
  ) {}

  ngOnInit(): void {
    this.loadWines();
  }

  loadWines(): void {
    this.wines = this.wineService.readAll(this.currentPage, this.WINE_PER_PAGE);
    this.pageCount = this.wineService.pageCount(this.WINE_PER_PAGE);
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.loadWines();
  }

  onSubmit(): void {
    let id: number = Number(this.route.snapshot.params['id']);
    console.log(id);
  }

  onDelete(id: number): void {
    this.wineService.delete(id);
    this.loadWines();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadWines();
  }
}
