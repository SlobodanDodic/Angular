import { Component, OnInit } from '@angular/core';
import { Wine } from '../model/wine';
import { WineService } from '../wine.service';

@Component({
  selector: 'wc-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css'],
})
export class WineListComponent implements OnInit {
  wines: Wine[] = [];

  constructor(private wineService: WineService) {}

  ngOnInit(): void {
    this.wineService.readAll().subscribe({
      next: (response: any) => {
        this.wines = response.map((jsonWine: any) => {
          return new Wine(jsonWine);
        });
      },
      error: (response: any) => {
        console.log('error: ', response.statusText);
      },
    });
  }

  onDelete(id: number): void {
    this.wineService.delete(id).subscribe({
      next: (response: any) => {
        this.ngOnInit();
      },
      error: (response: any) => {
        console.log('error: ', response.statusText);
      },
    });
  }
}
