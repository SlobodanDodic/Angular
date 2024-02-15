import { Component } from '@angular/core';
import { Pet } from './model/pet';

@Component({
  selector: 'pets-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css'],
})
export class PetComponent {
  dog1: Pet = new Pet({
    name: 'Stringer',
    old: 3,
    gender: 'Male',
    race: 'Labrador Retriever',
    date: Date.now(),
    image: 'assets/images/pet.png',
    hobbies: ['Playing fetch', 'Going for walks', 'Chewing toys'],
  });

  dog2: Pet = new Pet({
    name: 'Dot',
    old: 4,
    gender: 'Female',
    race: 'Golden Retriever',
    date: Date.now(),
    image: 'assets/images/pet.png',
    hobbies: ['Swimming', 'Running', 'Cuddling'],
  });

  pets: Pet[] = [];

  constructor() {
    this.pets.push(this.dog1);
    this.pets.push(this.dog2);
  }
}
