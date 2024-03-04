import { Component, OnInit } from '@angular/core';
import { ExibitionService } from '../services/exibition.service';
import { Exibition } from '../model/exibition';

@Component({
  selector: 'app-exibitions',
  templateUrl: './exibitions.component.html',
  styleUrls: ['./exibitions.component.css'],
})
export class ExibitionsComponent implements OnInit {
  exibitions: Exibition[] = [];

  constructor(private exibitionService: ExibitionService) {}

  ngOnInit(): void {
    this.getExibitions();
  }

  getExibitions(): void {
    this.exibitionService.getExibitions().subscribe({
      next: (exibitions: Exibition[]) => {
        this.exibitions = exibitions;
        // console.log(exibitions);
      },
      error: (err) => console.log(err),
    });
  }
}
