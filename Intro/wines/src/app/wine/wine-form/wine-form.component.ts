import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Wine } from '../model/wine';
import { WineService } from '../wine.service';

@Component({
  selector: 'wc-wine-form',
  templateUrl: './wine-form.component.html',
  styleUrls: ['./wine-form.component.css'],
})
export class WineFormComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    year: new FormControl(1628, [Validators.required, Validators.min(1628)]),
    country: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

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

  constructor(
    private wineService: WineService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id: number = Number(this.route.snapshot.params['id']);
    console.log('id: ', id);
    if (id) {
      this.wineService.read(id).subscribe({
        next: (response: any) => {
          let wine: Wine = new Wine(response);
          this.form.patchValue(wine);
        },
        error: (response: any) => {
          console.log('error: ', response.statusText);
        },
      });
    }
  }

  onSubmit(): void {
    let wine: Wine = new Wine(this.form.value);
    let id: number = Number(this.route.snapshot.params['id']);

    if (id) {
      wine.id = id;
      this.wineService.update(wine).subscribe({
        next: (response: any) => {
          this.router.navigate(['wines']);
        },
        error: (response: any) => {
          console.log('error: ', response.statusText);
        },
      });
    } else {
      this.wineService.create(wine).subscribe({
        next: (response: any) => {
          this.router.navigate(['wines']);
        },
        error: (response: any) => {
          console.log('error: ', response.statusText);
        },
      });
    }
  }
}
