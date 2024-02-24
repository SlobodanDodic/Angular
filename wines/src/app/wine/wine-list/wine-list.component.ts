import { Component, OnInit } from '@angular/core';
import { Wine } from '../model/wine';
import { WineService } from '../wine.service';

@Component({
  selector: 'wc-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css']
})
export class WineListComponent implements OnInit {
  wines: Wine[] = [];

  constructor(private wineService: WineService) { }

  ngOnInit(): void {
    this.wines = this.wineService.readAll();
  }

  onDelete(id: number) {
    this.wineService.delete(id);
    this.ngOnInit()
  }

}
