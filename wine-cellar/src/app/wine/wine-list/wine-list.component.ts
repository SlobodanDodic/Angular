import { Component, OnInit } from '@angular/core';
import { Wine } from '../model/wine';
import { WINES } from '../data/wines';

@Component({
  selector: 'wc-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css'],
})
export class WineListComponent implements OnInit {
  wines: Wine[] = [];

  WINE_PER_PAGE: number = 5;

  pageCount: number = Math.ceil(WINES.length / this.WINE_PER_PAGE);

  ngOnInit(): void {
    this.wines = WINES?.map((wine) => new Wine(wine));
  }
}
