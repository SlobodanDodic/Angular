import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Wine } from '../model/wine';

@Component({
  selector: 'wc-wine-form',
  templateUrl: './wine-form.component.html',
  styleUrls: ['./wine-form.component.css'],
})
export class WineFormComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    year: new FormControl(1879, [Validators.required, Validators.min(1747)]),
    country: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  onSubmit(): void {
    let wine: Wine = new Wine(this.form.value);
    console.log(JSON.stringify(wine));
    this.form.reset();
  }

  get name() {
    return this.form.get('name');
  }

  ngOnInit(): void {
    let wine: Wine = new Wine({
      name: 'Vino',
      year: 1899,
      country: 'Mexico',
      description: 'none',
    });
    this.form.patchValue(wine);
  }
}
