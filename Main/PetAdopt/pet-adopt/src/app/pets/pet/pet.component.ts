import { Component, Input } from '@angular/core';
import { Pet } from 'src/app/model/pet.model';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css'],
})
export class PetComponent {
  @Input() pet: Pet = new Pet();
}
