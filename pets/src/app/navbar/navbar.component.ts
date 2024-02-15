import { Component, OnInit } from '@angular/core';
import { PetType } from '../pet/model/pettype';
import { PET_TYPES } from './pettypes';

@Component({
  selector: 'pets-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  petTypes: PetType[] = [];

  constructor() {}

  ngOnInit(): void {
    this.petTypes = PET_TYPES.map((pettype) => new PetType(pettype));
  }
}
