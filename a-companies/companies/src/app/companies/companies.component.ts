import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { CompanyList } from '../model/company.model';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],
})
export class CompaniesComponent implements OnInit {
  companies: CompanyList = new CompanyList();

  queryParams = {
    name: '',
    page: 1,
    pageSize: 7,
    filter: {
      address: 'Street',
    },
  };

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {}

  getAll() {
    this.companyService.getAll().subscribe({
      next: (companies: CompanyList) => {
        this.companies = companies;
        console.log(companies);
      },
      error: (err) => console.log(err),
    });
  }

  getSorted() {
    this.companyService.getSorted().subscribe({
      next: (companies: CompanyList) => {
        this.companies = companies;
        console.log(companies);
      },
      error: (err) => console.log(err),
    });
  }

  getFiltered() {
    this.companyService.getFiltered(this.queryParams).subscribe({
      next: (companies: CompanyList) => {
        this.companies = companies;
        console.log(companies);
      },
      error: (err) => console.log(err),
    });
  }

  getPage() {
    this.companyService.getPage(this.queryParams).subscribe({
      next: (companies: CompanyList) => {
        console.log(companies);
        this.companies = companies;
      },
      error: (err) => console.log(err),
    });
  }
}
