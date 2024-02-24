import { Injectable } from '@angular/core';
import { Wine } from './model/wine';
import { WINES } from './wines';

@Injectable({
  providedIn: 'root',
})
export class WineService {
  private wines: Wine[] = [];
  private nextId: number = 0;

  constructor() {
    this.wines = WINES.map((jsonWine) => new Wine(jsonWine));
    this.nextId = Math.max(...this.wines.map((wine) => wine.id)) + 1;
  }

  create(wine: Wine): void {
    wine.id = this.nextId;
    this.wines.push(wine);
    this.nextId++;
  }

  read(id: number): Wine {
    return this.wines.find((wine) => wine.id == id) || new Wine();
  }

  readAll(): Wine[] {
    return this.wines.map((wine) => wine);
  }

  update(wine: Wine): void {
    this.wines[this.wines.findIndex((itWine) => itWine.id == wine.id)] = wine;
  }

  delete(id: number): void {
    this.wines = this.wines.filter((wine) => wine.id != id);
  }
}
