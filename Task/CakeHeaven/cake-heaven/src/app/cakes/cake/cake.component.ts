import { Component, Input } from '@angular/core';
import { Cake } from 'src/app/model/cake.model';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css'],
})
export class CakeComponent {
  @Input() cake: Cake = new Cake();
}
