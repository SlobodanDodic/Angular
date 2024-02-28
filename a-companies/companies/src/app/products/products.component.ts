import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  
  getAll() {
    // Domaci 1
    // get all products
    // console log result
  }

  getSorted() {
    // Domaci 2
    // get products sorted by priceRsd
    // console log result
  }

  getFiltered() {
    // Domaci 2
    // get products filtered by brand
    // console log result
  }

  getPage() {
    // Domaci 2
    // get first page of products, page size 10
    // console log result
  }


}
