import { Component, OnInit } from '@angular/core';
import { RestaurantList } from 'src/app/model/restaurant';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
})
export class RestaurantsComponent implements OnInit {
  restaurants: RestaurantList = new RestaurantList();

  constructor(private service: RestaurantService) {}

  ngOnInit(): void {
    this.service.getRestaurants().subscribe((restaurants: RestaurantList) => {
      this.restaurants = restaurants;
    });
  }
}
