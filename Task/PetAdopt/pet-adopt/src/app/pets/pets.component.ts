import { Component, OnInit } from '@angular/core';
import { PetList } from '../model/pet.model';
import { PetService } from '../services/pet.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css'],
})
export class PetsComponent implements OnInit {
  petList: PetList = new PetList();
  categories: string[] = [];

  params = {
    sort: '',
    filter: {
      category: '',
      sex: '',
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
          this.petList = pets;
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
}
