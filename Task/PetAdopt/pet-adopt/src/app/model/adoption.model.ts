export class AdoptionList {
  count: number;
  results: Adoption[];

  constructor(obj?: any) {
    this.count = (obj && obj.count) || 0;
    this.results =
      (obj &&
        obj.results &&
        obj.results.map((elem: any) => new Adoption(elem))) ||
      [];
  }
}

export class Adoption {
  _id: number;
  name: string;
  contact: string;
  petId: number;
  petName: string;

  constructor(obj?: any) {
    this._id = (obj && obj._id) || null;
    this.name = (obj && obj.name) || '';
    this.contact = (obj && obj.contact) || '';
    this.petId = (obj && obj.petId) || null;
    this.petName = (obj && obj.petName) || '';
  }
}
