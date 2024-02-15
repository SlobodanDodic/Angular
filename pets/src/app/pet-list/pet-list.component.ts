import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet/model/pet';

@Component({
  selector: 'pets-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css'],
})
export class PetListComponent implements OnInit {
  pets: Pet[] = [];

  constructor() {}

  ngOnInit(): void {}
}
