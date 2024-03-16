import { Component, OnInit } from '@angular/core';
import { AdoptionList } from '../model/adoption.model';
import { AdoptionService } from '../services/adoption.service';

@Component({
  selector: 'app-adoptions',
  templateUrl: './adoptions.component.html',
  styleUrls: ['./adoptions.component.css'],
})
export class AdoptionsComponent implements OnInit {
  adoptions: AdoptionList = new AdoptionList();

  constructor(private service: AdoptionService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe({
      next: (adoptions: AdoptionList) => {
        this.adoptions = adoptions;
      },
      error: (err) => console.log(err),
    });
  }
}
