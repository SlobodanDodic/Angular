import { Component } from '@angular/core';
import { PetList } from 'src/model/pet.model';
import { PetService } from '../services/pet.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css'],
})
export class PetsComponent {
  pets: PetList = new PetList();
  categories: string[] = [];

  params = {
    sort: '',
    sortDirection: 'asc',
    page: 1,
    pageSize: 4,
    filter: {
      sex: '',
      category: '',
    },
  };

  constructor(private service: PetService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getPets();
    this.getCategories();
  }

  getPets(): void {
    this.route.params.subscribe(() => {
      this.service.getPets(this.params).subscribe({
        next: (pets: PetList) => {
          this.pets = pets;
        },
        error: (err: any) => {
          console.log('error: ', err);
        },
      });
    });
  }

  getCategories(): void {
    this.service.getCategories().subscribe({
      next: (categories: string[]) => {
        this.categories = categories;
      },
      error: (err: any) => {
        console.log('error: ', err);
      },
    });
  }

  selectCategory(event: any): void {
    this.params.filter.category = event.target.value;
    this.getPets();
  }

  filterOption(event: any): void {
    this.params.filter.sex = event.target.value;
    this.getPets();
  }

  selectSorting(event: any): void {
    this.params.sort = event.target.value;
    this.getPets();
  }
}
