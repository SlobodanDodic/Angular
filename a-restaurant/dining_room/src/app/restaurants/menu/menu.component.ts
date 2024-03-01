import { Component, Input } from '@angular/core';
import { Restaurant } from 'src/app/model/restaurant.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  @Input()
  restaurant: Restaurant = new Restaurant();
}
