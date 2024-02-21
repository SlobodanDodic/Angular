import { Component, OnInit } from '@angular/core';
import { Pizza } from '../model/pizza';
import { PIZZAS } from '../data/pizzas';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css'],
})
export class PizzaListComponent implements OnInit {
  pizzas: Pizza[] = PIZZAS?.map((pizza) => new Pizza(pizza));

  constructor() {}

  ngOnInit() {
    console.log(this.pizzas);
  }
}
