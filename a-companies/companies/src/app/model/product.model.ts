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
