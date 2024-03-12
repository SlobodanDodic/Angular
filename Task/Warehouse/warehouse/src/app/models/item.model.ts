export class ItemList {
  count: number;
  results: Item[];

  constructor(obj?: any) {
    this.count = (obj && obj.count) || 0;
    this.results =
      (obj && obj.results && obj.results.map((elem: any) => new Item(elem))) ||
      [];
  }
}

export class Item {
  _id: number;
  price: number;
  documents: number;
  quantity: number;
  article: string;

  constructor(obj?: any) {
    this._id = (obj && obj._id) || 0;
    this.price = (obj && obj.price) || 0;
    this.documents = (obj && obj.documents) || 0;
    this.quantity = (obj && obj.quantity) || 0;
    this.article = (obj && obj.article) || '';
  }
}
