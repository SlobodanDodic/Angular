import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PetService } from 'src/app/services/pet.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(
    private service: PetService,
    private router: Router,
    private toastService: ToastService
  ) {}

  reset(): void {
    this.service.reset().subscribe({
      next: () => {
        this.toastService.show('Server reseted successfully!', {
          classname: 'bg-success',
        });
        this.router.navigate(['/pets']);
      },
      error: (err: any) => {
        console.log('error: ', err);
      },
    });
  }
}
