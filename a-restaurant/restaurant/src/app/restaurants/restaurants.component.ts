import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RestaurantList } from 'src/app/model/restaurant';
import { RestaurantService } from 'src/app/services/restaurant.service';

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
      priceFrom: 1,
      priceTo: 5,
      cuisine: '',
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

  onPageChange(newPage: number): void {
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
        this.restaurants = restaurants;
      },
      error: (err) => console.log(err),
    });
  }
}
