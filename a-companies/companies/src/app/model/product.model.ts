export class ProductList {
  count: number;
  results: Product[];

  constructor(obj?: any) {
    this.count = (obj && obj.count) || 0;
    this.results =
      (obj &&
        obj.results &&
        obj.results.map((elem: any) => new Product(elem))) ||
      [];
  }
}

export class Product {
  _id: number;
  name: string;
  brand: string;
  description: string;
  priceRsd: number;
  tags: string[];

  constructor(obj?: any) {
    this._id = (obj && obj._id) || 0;
    this.name = (obj && obj.name) || '';
    this.brand = (obj && obj.brand) || '';
    this.description = (obj && obj.description) || '';
    this.priceRsd = (obj && obj.priceRsd) || 0;
    this.tags = (obj && obj.tags) || [];
  }
}
