import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Adoption } from 'src/app/model/adoption.model';
import { Pet } from 'src/app/model/pet.model';
import { AdoptionService } from 'src/app/services/adoption.service';
import { PetService } from 'src/app/services/pet.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css'],
})
export class PetDetailsComponent implements OnInit {
  petId: number = 0;
  pet: Pet = new Pet();

  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    contact: new FormControl('', Validators.required),
  });

  constructor(
    private service: PetService,
    private route: ActivatedRoute,
    private adoptServise: AdoptionService,
    public toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.petId = params['id'];
      this.getPet();
    });
  }

  getPet() {
    this.service.getPet(this.petId).subscribe({
      next: (response: Pet) => {
        this.pet = response;
      },
      error: (err: any) => {
        console.log('error: ', err);
      },
    });
  }

  onSubmit() {
    if (!this.form.valid) {
      this.toastService.show('Please fill in the form', {
        classname: 'bg-danger text-light',
        delay: 5000,
      });
      return;
    }
    let adoption = new Adoption(this.form.value);
    adoption.petId = this.petId;
    adoption.petName = this.pet.name;
    this.adoptServise.postAdoption(adoption).subscribe({
      next: (adoption: Adoption) => {
        this.toastService.show('Request sent', {
          classname: 'bg-success text-light',
          delay: 5000,
        });
        this.form.reset();
      },
      error: (err) => {
        this.toastService.show('Error', {
          classname: 'bg-danger text-light',
          delay: 10000,
        });
      },
    });
  }
}
