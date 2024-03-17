import { Component, OnInit } from '@angular/core';
import { RestaurantList } from '../model/restaurant.model';
import { RestaurantService } from '../services/restaurant.service';
import { ActivatedRoute, Params } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
})
export class RestaurantsComponent implements OnInit {
  restaurants: RestaurantList = new RestaurantList();

  params = {
    page: 1,
    pageSize: 12,
    filter: {
      cuisine: '',
      priceFrom: 1,
      priceTo: 5,
    },
  };

  priceFromControl = new FormControl(1);
  priceToControl = new FormControl(5);

  constructor(
    private service: RestaurantService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.params.filter.cuisine =
        params['cuisine'] == 'all' ? '' : params['cuisine'];
      this.getRestaurants();
    });
  }

  getRestaurants(): void {
    this.route.params.subscribe(() => {
      this.service.getRestaurants(this.params).subscribe({
        next: (restaurants: RestaurantList) => {
          this.restaurants = restaurants;
        },
        error: (err: any) => {
          console.log('error: ', err);
        },
      });
    });
  }

  onPageChanged(newPage: number) {
    this.params.page = newPage;
    this.getRestaurants();
  }

  onPriceChange() {
    this.params.filter.priceFrom = Number(this.priceFromControl.value);
    this.params.filter.priceTo = Number(this.priceToControl.value);
    this.getRestaurants();
  }
}
