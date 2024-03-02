export class PersonList {
  count: number;
  results: Person[];

  constructor(obj?: any) {
    this.count = (obj && obj.count) || 0;
    this.results =
      (obj &&
        obj.results &&
        obj.results.map((elem: any) => new Person(elem))) ||
      [];
  }

  // filter(idActive: boolean): void {
  //   this.results = this.results.filter(
  //     (person: any) => person.isActive === idActive
  //   );
  // }
}

export class Person {
  _id: number;
  isActive: boolean;
  age: number;
  name: string;
  gender: string;
  phone: string;

  constructor(obj?: any) {
    this._id = (obj && obj._id) || 0;
    this.isActive = (obj && obj.isActive) || false;
    this.age = (obj && obj.age) || 0;
    this.name = (obj && obj.name) || '';
    this.gender = (obj && obj.gender) || '';
    this.phone = (obj && obj.phone) || '';
  }
}
