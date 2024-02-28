import { Injectable } from '@angular/core';

const baseURL = "http://localhost:3000/api/v2/products";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
}
