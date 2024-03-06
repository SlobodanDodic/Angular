export class RestaurantList {
  count: number;
  results: Restaurant[];

  constructor(obj?: any) {
    this.count = (obj && obj.count) || 0;
    this.results =
      (obj &&
        obj.results &&
        obj.results.map((elem: any) => new Restaurant(elem))) ||
      [];
  }
}

export class Restaurant {
  name: string;
  cuisine: string;
  _id: number;
  description: string;
  location: string;
  price: number;
  rating: number;
  days: Days;

  constructor(obj?: any) {
    this.name = (obj && obj.name) || '';
    this.cuisine = (obj && obj.cuisine) || '';
    this._id = (obj && obj._id) || 0;
    this.description = (obj && obj.description) || '';
    this.location = (obj && obj.location) || '';
    this.price = (obj && obj.price) || 0;
    this.rating = (obj && obj.rating) || 0;
    this.days = (obj && new Days(obj.days)) || new Days();
  }
}

export class Days {
  '1': Day;
  '2': Day;
  '3': Day;
  '4': Day;
  '5': Day;
  '6': Day;
  '7': Day;

  constructor(obj?: any) {
    this['1'] = (obj && new Day(obj['1'])) || new Day();
    this['2'] = (obj && new Day(obj['2'])) || new Day();
    this['3'] = (obj && new Day(obj['3'])) || new Day();
    this['4'] = (obj && new Day(obj['4'])) || new Day();
    this['5'] = (obj && new Day(obj['5'])) || new Day();
    this['6'] = (obj && new Day(obj['6'])) || new Day();
    this['7'] = (obj && new Day(obj['7'])) || new Day();
  }
}

export class Day {
  opens: string;
  closes: string;

  constructor(obj?: any) {
    this.opens = (obj && obj.opens) || '';
    this.closes = (obj && obj.closes) || '';
  }
}
