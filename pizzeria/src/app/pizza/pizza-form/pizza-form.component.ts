import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pizza } from '../model/pizza';

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

  onSubmit(): void {
    if (this.form.valid) {
      let pizza: Pizza = new Pizza(this.form.value);
      console.log(JSON.stringify(pizza));
      this.form.reset();
    }
  }

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

  ngOnInit(): void {}
}
