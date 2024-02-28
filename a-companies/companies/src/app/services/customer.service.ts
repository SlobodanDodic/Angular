import { Injectable } from '@angular/core';

const baseURL = "http://localhost:3000/api/v2/customers";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }
}
