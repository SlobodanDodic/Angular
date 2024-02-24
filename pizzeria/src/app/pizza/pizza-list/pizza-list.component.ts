import { Component, OnInit } from '@angular/core';
import { Pizza } from '../model/pizza';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css'],
})
export class PizzaListComponent implements OnInit {
  pizzas: Pizza[] = [];

  constructor(private pizzaService: PizzaService) {}

  ngOnInit(): void {
    this.fetchPizzas();
  }

  fetchPizzas(): void {
    this.pizzaService.readAll().subscribe({
      next: (response: any) => {
        this.pizzas = response.map((jsonWine: any) => {
          return new Pizza(jsonWine);
        });
      },
      error: (response: any) => {
        console.log('error: ', response.statusText);
      },
    });
  }

  onDelete(id: number): void {
    this.pizzaService.delete(id).subscribe({
      next: (response: any) => {
        this.fetchPizzas();
      },
      error: (response: any) => {
        console.log('error: ', response.statusText);
      },
    });
  }
}
