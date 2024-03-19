import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Cake } from 'src/app/model/cake.model';
import { CakeService } from 'src/app/services/cake.service';

@Component({
  selector: 'app-cake-details',
  templateUrl: './cake-details.component.html',
  styleUrls: ['./cake-details.component.css'],
})
export class CakeDetailsComponent implements OnInit {
  id: number = 0;
  cake: Cake = new Cake();

  constructor(private service: CakeService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.id = params['id'];
        this.getCake();
      }
    });
  }

  getCake(): void {
    this.service.getCake(this.id).subscribe({
      next: (cake: Cake) => {
        this.cake = cake;
      },
      error: (err: any) => {
        console.log('error: ', err);
      },
    });
  }
}
