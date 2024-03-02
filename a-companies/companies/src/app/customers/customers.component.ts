import { Component, OnInit } from '@angular/core';
import { CustomerList } from '../model/customer.model';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  customers: CustomerList = new CustomerList();

  queryParams = {
    company: '',
    page: 2,
    pageSize: 9,
    filter: {
      name: 'Luna',
    },
  };

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {}

  getAll() {
    this.customerService.getAll().subscribe({
      next: (customers: CustomerList) => {
        console.log(customers);
        this.customers = customers;
      },
      error: (err) => console.log(err),
    });
  }

  getSorted() {
    this.customerService.getSorted().subscribe({
      next: (customers: CustomerList) => {
        this.customers = customers;
        console.log(customers);
      },
      error: (err) => console.log(err),
    });
  }

  getFiltered() {
    this.customerService.getFiltered(this.queryParams).subscribe({
      next: (customers: CustomerList) => {
        this.customers = customers;
        console.log(customers);
      },
      error: (err) => console.log(err),
    });
  }

  getPage() {
    this.customerService.getPage(this.queryParams).subscribe({
      next: (customers: CustomerList) => {
        console.log(customers);
        this.customers = customers;
      },
      error: (err) => console.log(err),
    });
  }
}
