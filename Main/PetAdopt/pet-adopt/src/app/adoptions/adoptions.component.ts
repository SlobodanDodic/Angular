import { Component, OnInit } from '@angular/core';
import { PetService } from '../services/pet.service';
import { Adopt, AdoptList } from 'src/model/adopt.model';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-adoptions',
  templateUrl: './adoptions.component.html',
  styleUrls: ['./adoptions.component.css'],
})
export class AdoptionsComponent implements OnInit {
  adoptedPets: AdoptList = new AdoptList();

  constructor(
    private service: PetService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.getAdoptedPets();
  }

  getAdoptedPets(): void {
    this.service.getAdoptedPets().subscribe({
      next: (adoptedPets: AdoptList) => {
        this.adoptedPets = adoptedPets;
      },
      error: (err: any) => {
        console.log('error: ', err);
      },
    });
  }

  approveAdoption(adopt: Adopt): void {
    this.service.approveAdoption(adopt.petId).subscribe({
      next: (_adopt: Adopt) => {
        this.toastService.show('Adoption approved', {
          classname: 'bg-success text-light',
        });
        this.getAdoptedPets();
      },
      error: (err: any) => {
        this.toastService.show('Adoption not approved', {
          classname: 'bg-danger text-light',
        });
        console.log('error: ', err);
      },
    });
  }
}
