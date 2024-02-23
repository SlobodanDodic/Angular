import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Wine } from '../model/wine';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute) {}

  onSubmit(): void {
    let wine: Wine = new Wine(this.form.value);
    console.log(JSON.stringify(wine));
    this.form.reset();

    let id: number = Number(this.route.snapshot.params['id']);
    alert(id);
  }

  get name() {
    return this.form.get('name');
  }

  get year() {
    return this.form.get('year');
  }

  get country() {
    return this.form.get('country');
  }

  get description() {
    return this.form.get('description');
  }

  ngOnInit(): void {
    let id: number = Number(this.route.snapshot.params['id']);
    console.log(id);
  }
}
