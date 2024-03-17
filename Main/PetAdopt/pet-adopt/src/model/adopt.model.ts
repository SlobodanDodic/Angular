export class AdoptList {
  count: number;
  results: Adopt[];

  constructor(obj?: any) {
    this.count = (obj && obj.count) || 0;
    this.results =
      (obj && obj.results && obj.results.map((elem: any) => new Adopt(elem))) ||
      [];
  }
}

export class Adopt {
  petId: number;
  petName: string;
  name: string;
  contact: string;

  constructor(obj?: any) {
    this.petId = (obj && obj.petId) || 0;
    this.petName = (obj && obj.petName) || '';
    this.name = (obj && obj.name) || '';
    this.contact = (obj && obj.contact) || '';
  }
}
