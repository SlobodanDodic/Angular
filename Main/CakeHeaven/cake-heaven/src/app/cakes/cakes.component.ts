import { Component, OnInit } from '@angular/core';
import { Cake } from '../model/cake.model';
import { CakeService } from '../services/cake.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.css'],
})
export class CakesComponent implements OnInit {
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
    this.getIngredients();
  }

  getCakes(): void {
    this.route.params.subscribe(() => {
      this.service.getCakes(this.params).subscribe({
        next: (cakes: Cake[]) => {
          this.cakes = cakes;
        },
        error: (err: any) => {
          console.log('error: ', err);
        },
      });
    });
  }

  getIngredients(): void {
    this.service.getIngredients().subscribe({
      next: (ingredients: string[]) => {
        this.ingredients = ingredients;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  selectOption(event: any): void {
    this.params.filter.ingredients = event.target.value;
    this.getCakes();
  }
}
