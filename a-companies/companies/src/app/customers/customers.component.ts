import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  
  getAll() {
    // Domaci 1
    // get all customers
    // console log result
  }

  getSorted() {
    // Domaci 2
    // get customers sorted by company
    // console log result
  }

  getFiltered() {
    // Domaci 2
    // get customers filtered by name
    // console log result
  }

  getPage() {
    // Domaci 2
    // get second page of customers, page size 9
    // console log result
  }

}
