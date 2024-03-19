import { Component } from '@angular/core';
import { Cake } from '../model/cake.model';
import { ActivatedRoute } from '@angular/router';
import { CakeService } from '../services/cake.service';

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.css'],
})
export class CakesComponent {
  cakes: Cake[] = [];
  ingredients: string[] = [];

  params = {
    sort: 'name',
    sortDirection: 'asc',
    filter: {
      ingredients: '',
    },
  };

  constructor(private service: CakeService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getCakes();
  }

  getCakes(): void {
    this.service.getCakes(this.params).subscribe({
      next: (cakes: Cake[]) => {
        this.cakes = cakes;
        this.getIngredients();
      },
      error: (err: any) => {
        console.log('error: ', err);
      },
    });
  }

  getIngredients(): void {
    this.service.getIngredients().subscribe({
      next: (ingredients: string[]) => {
        this.ingredients = ingredients;
      },
      error: (err: any) => {
        console.log('error: ', err);
      },
    });
  }

  selectedIngrediente(event: any): void {
    this.params.filter.ingredients = event.target.value;
    this.getCakes();
  }
}
