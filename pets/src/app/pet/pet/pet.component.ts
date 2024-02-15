import { Component, Input, OnInit } from '@angular/core';
import { Pet } from '../model/pet';

@Component({
  selector: 'pets-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css'],
})
export class PetComponent implements OnInit {
  @Input() pet: Pet = new Pet();

  constructor() {}

  ngOnInit(): void {}
}
