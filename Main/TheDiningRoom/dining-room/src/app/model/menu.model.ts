export class MenuList {
  count: number;
  results: Menu[];

  constructor(obj?: any) {
    this.count = (obj && obj.count) || 0;
    this.results =
      (obj && obj.results && obj.results.map((elem: any) => new Menu(elem))) ||
      [];
  }
}

export class Menu {
  _id: number;
  restaurants: number;
  items: MenuItem[];

  constructor(obj?: any) {
    this._id = (obj && obj._id) || 0;
    this.restaurants = (obj && obj.restaurants) || 0;
    this.items =
      (obj && obj.items && obj.items.map((elem: any) => new MenuItem(elem))) ||
      [];
  }
}

export class MenuItem {
  name: string;
  price: number;

  constructor(obj?: any) {
    this.name = (obj && obj.name) || '';
    this.price = (obj && obj.price) || 0;
  }
}
