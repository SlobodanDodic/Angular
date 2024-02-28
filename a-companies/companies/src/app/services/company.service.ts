import { Injectable } from '@angular/core';

const baseURL = "http://localhost:3000/api/companies";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor() { }
}
