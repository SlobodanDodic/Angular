import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../services/application.service';
import { Application, ApplicationList } from '../model/application';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css'],
})
export class ApplicationListComponent implements OnInit {
  apps: ApplicationList = new ApplicationList();
  appsByEmail: Application[] = [];
  noAppsMessage = false;

  email: FormControl = new FormControl('', [Validators.required]);

  constructor(private service: ApplicationService) {}

  ngOnInit(): void {
    this.getApplications();
  }

  getApplications(): void {
    this.service.getApplications().subscribe({
      next: (apps: ApplicationList) => {
        this.apps = apps;
      },
      error: (err: any) => {
        console.log('error: ', err);
      },
    });
  }

  onSubmit(): void {
    if (this.email.value) {
      this.service.getApplicationByEmail(this.email.value).subscribe({
        next: (appsByEmail: Application[]) => {
          this.appsByEmail = appsByEmail;
          if (this.appsByEmail.length > 0) {
            this.noAppsMessage = false;
          } else {
            this.noAppsMessage = true;
          }
        },
        error: (err: any) => {
          console.log('error: ', err);
        },
      });
    } else {
      alert('Email je obavezan');
    }
  }

  deleteApplication(id: number): void {
    this.service.deleteApplication(id).subscribe({
      next: (_data: Application) => {
        this.onSubmit();
      },
      error: (err: any) => {
        console.log('error: ', err);
      },
    });
  }
}
