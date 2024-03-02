export class CompanyList {
  count: number;
  results: Company[];

  constructor(obj?: any) {
    this.count = (obj && obj.count) || 0;
    this.results =
      (obj &&
        obj.results &&
        obj.results.map((elem: any) => new Company(elem))) ||
      [];
  }
}

export class Company {
  _id: string;
  name: string;
  address: string;
  registered: Date;
  latitude: number;
  longitude: number;
  employees: Employee[];

  constructor(obj?: any) {
    this._id = (obj && obj._id) || '';
    this.name = (obj && obj.name) || '';
    this.address = (obj && obj.address) || '';
    this.registered = (obj && obj.registered) || '';
    this.latitude = (obj && obj.latitude) || 0;
    this.longitude = (obj && obj.longitude) || 0;
    this.employees = (obj && new Employee(obj.employees)) || new Employee();
  }
}

export class Employee {
  _id: number;
  name: string;

  constructor(obj?: any) {
    this._id = (obj && obj._id) || 0;
    this.name = (obj && obj.name) || '';
  }
}
