import { Injectable } from '@angular/core';
import { Wine } from '../model/wine';
import { WINES } from '../data/wines';

@Injectable({
  providedIn: 'root',
})
export class WineService {
  private wines: Wine[] = [];

  constructor() {
    this.wines = WINES.map((wine) => new Wine(wine));
  }

  activePage: number = 1;

  pageCount(winesPerPage: number): number {
    return Math.ceil(this.getWineCount() / winesPerPage);
  }

  getWineCount(): number {
    return this.wines.length;
  }

  readAll(page: number, winePerPage: number) {
    this.activePage = page;
    const startIdx = (page - 1) * winePerPage;
    const endIdx = startIdx + winePerPage;
    return this.wines.slice(startIdx, endIdx).map((wine) => new Wine(wine));
  }

  delete(id: number): void {
    this.wines = this.wines.filter((wine) => wine.id !== id);
  }
}
