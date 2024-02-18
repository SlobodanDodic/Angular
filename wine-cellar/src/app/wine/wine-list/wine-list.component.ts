import { Component, OnInit } from '@angular/core';
import { Wine } from '../model/wine';
import { WINES } from '../data/wines';

@Component({
  selector: 'wc-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css'],
})
export class WineListComponent implements OnInit {
  wines: Wine[] = WINES?.map((wine) => new Wine(wine));

  constructor() {}

  ngOnInit(): void {
    // this.wines = WINES.map((wine) => new Wine(wine));
  }
}
