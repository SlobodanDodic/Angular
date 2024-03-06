import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pizza } from '../model/pizza';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-details',
  templateUrl: './pizza-details.component.html',
  styleUrls: ['./pizza-details.component.css'],
})
export class PizzaDetailsComponent implements OnInit {
  @Input() pizza: Pizza = new Pizza();
  @Output() deletePizza: EventEmitter<number> = new EventEmitter<number>();

  constructor(private pizzaService: PizzaService) {}

  ngOnInit(): void {}

  onDelete(id: number): void {
    this.deletePizza.emit(id);
  }
}
