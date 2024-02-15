export class Wine {
  id: number;
  name: string;
  desciption: string;
  year: number;
  country: string;
  picture: string;

  constructor(obj?: any) {
    this.id = (obj && obj.id) || null;
    this.name = (obj && obj.name) || null;
    this.desciption = (obj && obj.description) || null;
    this.year = (obj && obj.year) || null;
    this.country = (obj && obj.country) || null;
    this.picture = (obj && obj.picture) || null;
  }
}
