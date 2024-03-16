import { Component, OnInit } from '@angular/core';
import { ExibitionService } from '../services/exibition.service';
import { Exibition } from '../model/exibition.model';

@Component({
  selector: 'app-exibitions',
  templateUrl: './exibitions.component.html',
  styleUrls: ['./exibitions.component.css'],
})
export class ExibitionsComponent implements OnInit {
  exibitions: Exibition[] = [];

  constructor(private service: ExibitionService) {}

  ngOnInit(): void {
    this.getExibitions();
  }

  getExibitions(): void {
    this.service.getExibitions().subscribe({
      next: (exibitions: Exibition[]) => {
        this.exibitions = exibitions;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
