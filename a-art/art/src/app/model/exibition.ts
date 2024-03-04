export class Exibition {
  _id: number;
  title: string;
  description: string;
  location: MuseumLocation;

  constructor(obj?: any) {
    this._id = (obj && obj._id) || 0;
    this.title = (obj && obj.title) || '';
    this.description = (obj && obj.description) || '';
    this.location =
      (obj && new MuseumLocation(obj.location)) || new MuseumLocation();
  }
}

export class MuseumLocation {
  _id: number;
  site: string;
  room: string;
  description: string;

  constructor(obj?: any) {
    this._id = (obj && obj._id) || 0;
    this.site = (obj && obj.site) || '';
    this.room = (obj && obj.room) || '';
    this.description = (obj && obj.description) || '';
  }
}
