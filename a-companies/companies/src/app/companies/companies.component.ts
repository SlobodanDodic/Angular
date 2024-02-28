import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  
  getAll() {
    // Domaci 1
    // get all companies
    // console log result
  }

  getSorted() {
    // Domaci 2
    // get companies sorted by name, descending
    // console log result
  }

  getFiltered() {
    // Domaci 2
    // get comapnies filtered by address
    // console log result
  }

  getPage() {
    // Domaci 2
    // get first page of comapnies, page size 7
    // console log result
  }

}
