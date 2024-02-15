import { Component, OnInit } from '@angular/core';
import { Pet } from '../model/pet';
import { PETS } from '../data/pets';

@Component({
  selector: 'pets-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css'],
})
export class PetListComponent implements OnInit {
  pets: Pet[] = [];

  constructor() {}

  ngOnInit(): void {
    this.pets = PETS.map((pet) => new Pet(pet));
  }
}
