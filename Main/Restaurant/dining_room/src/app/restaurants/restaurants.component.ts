import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service';
import { Restaurant, RestaurantList } from '../model/restaurant.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
})
export class RestaurantsComponent implements OnInit {
  restaurants: RestaurantList = new RestaurantList();

  queryParams = {
    page: 1,
    pageSize: 9,
    filter: {
      cuisine: '',
      priceFrom: 1,
      priceTo: 5,
    },
  };

  constructor(
    private service: RestaurantService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.queryParams.filter.cuisine =
        params['cuisine'] == 'all' ? '' : params['cuisine'];
      this.getRestaurants();
    });
  }

  onPageChanged(newPage: number) {
    this.queryParams.page = newPage;
    this.getRestaurants();
  }

  onPriceChanged(priceRange: { from: number; to: number }) {
    this.queryParams.filter.priceFrom = priceRange.from;
    this.queryParams.filter.priceTo = priceRange.to;
    this.getRestaurants();
  }

  getRestaurants(): void {
    this.service.getRestaurants(this.queryParams).subscribe({
      next: (restaurants: RestaurantList) => {
        console.log(restaurants);
        this.restaurants = restaurants;
      },
      error: (err) => console.log(err),
    });
  }
}
