import { Component } from '@angular/core';

@Component({
  selector: 'app-leftbar',
  templateUrl: './leftbar.component.html',
  styleUrls: ['./leftbar.component.css'],
})
export class LeftbarComponent {
  cuisines = [
    'All',
    'German',
    'Chinese',
    'American',
    'Indian',
    'Pizza',
    'Vegetarian',
  ];
}
