import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExibitionService } from 'src/app/services/exibition.service';
import { Exibition } from 'src/app/model/exibition.model';

@Component({
  selector: 'app-new-exibitions',
  templateUrl: './new-exibitions.component.html',
  styleUrls: ['./new-exibitions.component.css']
})
export class NewExibitionsComponent {
  exibitionForm: FormGroup;
  locationForm: FormGroup;

  constructor(private service: ExibitionService) {
    (this.locationForm = new FormGroup({
      site: new FormControl('', [Validators.required]),
      room: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    })),
      (this.exibitionForm = new FormGroup({
        title: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
        location: this.locationForm,
      }));
  }

  onAdd(): void {
    console.log(this.exibitionForm.value);
    let newExibition = new Exibition(this.exibitionForm.value);
    if (!this.exibitionForm.valid) {
      alert('Please fill in the form');
      return;
    }
    this.service.add(newExibition).subscribe({
      next: (exibtion: Exibition) => {
        console.log(exibtion);
        this.exibitionForm.reset();
      },
      error: (err) => {
        alert(err);
      },
    });
  }
}
