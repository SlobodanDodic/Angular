import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Exibition } from 'src/app/model/exibition.model';
import { ExibitionService } from 'src/app/services/exibition.service';

@Component({
  selector: 'app-new-exibition',
  templateUrl: './new-exibition.component.html',
  styleUrls: ['./new-exibition.component.css']
})
export class NewExibitionComponent {

  exibitionForm: FormGroup;

  constructor(private service: ExibitionService) {
    this.exibitionForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]) 
    })
  }

  onAdd(): void {
    console.log(this.exibitionForm.value)
    let newExibition = new Exibition(this.exibitionForm.value)
    if (!this.exibitionForm.valid) {
      alert('Please fill in the form')
      return
    }
    this.service.add(newExibition).subscribe({
      next: (exibtion) => {
        console.log(exibtion);
      },
      error: (err) => {alert(err)}
    })
  }
}
