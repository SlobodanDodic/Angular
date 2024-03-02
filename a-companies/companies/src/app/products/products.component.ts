import { Component, OnInit } from '@angular/core';
import { ProductList } from '../model/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: ProductList = new ProductList();

  queryParams = {
    priceRsd: 0,
    page: 1,
    pageSize: 10,
    filter: {
      brand: 'KATAKANA',
    },
  };

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  getAll() {
    this.productService.getAll().subscribe({
      next: (products: ProductList) => {
        console.log(products);
        this.products = products;
      },
      error: (err) => console.log(err),
    });
  }

  getSorted() {
    this.productService.getSorted(this.queryParams).subscribe({
      next: (products: ProductList) => {
        this.products = products;
        console.log(products);
      },
      error: (err) => console.log(err),
    });
  }

  getFiltered() {
    this.productService.getFiltered(this.queryParams).subscribe({
      next: (products: ProductList) => {
        this.products = products;
        console.log(products);
      },
      error: (err) => console.log(err),
    });
  }

  getPage() {
    this.productService.getPage(this.queryParams).subscribe({
      next: (products: ProductList) => {
        console.log(products);
        this.products = products;
      },
      error: (err) => console.log(err),
    });
  }
}
