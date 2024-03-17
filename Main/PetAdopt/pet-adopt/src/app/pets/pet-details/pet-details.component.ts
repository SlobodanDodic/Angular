import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PetService } from 'src/app/services/pet.service';
import { ToastService } from 'src/app/services/toast.service';
import { Adopt } from 'src/model/adopt.model';
import { Pet } from 'src/model/pet.model';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css'],
})
export class PetDetailsComponent implements OnInit {
  petId: number = 0;
  pet: Pet = new Pet();

  adoptForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    contact: new FormControl('', [Validators.required]),
  });

  constructor(
    private service: PetService,
    private router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params['petId']) {
        this.petId = params['petId'];
        this.getPet();
      }
    });
  }

  getPet(): void {
    this.service.getPet(this.petId).subscribe({
      next: (pet: Pet) => {
        this.pet = pet;
      },
      error: (err: any) => {
        console.log('error: ', err);
      },
    });
  }

  onSubmit(): void {
    if (!this.adoptForm.valid) {
      this.toastService.show('Please fill in all fields!', {
        classname: 'bg-danger text-light',
      });
      return;
    } else {
      this.service
        .submitRequest({
          ...this.adoptForm.value,
          petId: this.pet._id,
          petName: this.pet.name,
        })
        .subscribe({
          next: (_data: Adopt) => {
            this.toastService.show('Request submitted!', {
              classname: 'bg-success text-light',
            });
            this.router.navigate(['/adoptions']);
          },
          error: (err: any) => {
            console.log('error: ', err);
            this.toastService.show(`Request denied! Error: ${err.message}`, {
              classname: 'bg-danger',
            });
          },
        });
    }
  }
}
