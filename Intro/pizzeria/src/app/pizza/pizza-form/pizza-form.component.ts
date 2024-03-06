import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pizza } from '../model/pizza';
import { PizzaService } from '../pizza.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pizza-form',
  templateUrl: './pizza-form.component.html',
  styleUrls: ['./pizza-form.component.css'],
})
export class PizzaFormComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    description: new FormControl('', [Validators.required]),
    grade: new FormControl('', [Validators.min(1), Validators.max(5)]),
    price: new FormControl('', [Validators.min(0)]),
  });

  get name() {
    return this.form.get('name');
  }

  get description() {
    return this.form.get('description');
  }

  get grade() {
    return this.form.get('grade');
  }

  get price() {
    return this.form.get('price');
  }

  constructor(
    private pizzaService: PizzaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id: number = Number(this.route.snapshot.params['id']);
    console.log('id: ', id);
    if (id) {
      this.pizzaService.read(id).subscribe({
        next: (response: any) => {
          let pizza: Pizza = new Pizza(response);
          this.form.patchValue(pizza);
        },
        error: (response: any) => {
          console.log('error: ', response.statusText);
        },
      });
    }
  }

  onSubmit(): void {
    let pizza: Pizza = new Pizza(this.form.value);
    let id: number = Number(this.route.snapshot.params['id']);

    if (id) {
      pizza.id = id;
      this.pizzaService.update(pizza).subscribe({
        next: (response: any) => {
          this.router.navigate(['pizzas']);
        },
        error: (response: any) => {
          console.log('error: ', response.statusText);
        },
      });
    } else {
      this.pizzaService.create(pizza).subscribe({
        next: (response: any) => {
          this.router.navigate(['pizzas']);
        },
        error: (response: any) => {
          console.log('error: ', response.statusText);
        },
      });
    }
  }
}
