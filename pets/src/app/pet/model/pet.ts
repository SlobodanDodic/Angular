export class Pet {
  name: string;
  old: number;
  gender: string;
  race: string;
  date: number;
  image: string;
  hobbies: string[];

  // constructor(name: string, old: number, gender: string, race: string, date: number, image: string) {
  // 	this._name = name;
  // 	this._old = old;
  // 	this._gender = gender;
  // 	this._race = race;
  // 	this._date = date;
  // 	this._image = image;
  // 	this._hobbies = [];
  // }

  constructor(obj?: any) {
    this.name = (obj && obj.name) || null;
    this.old = (obj && obj.old) || null;
    this.gender = (obj && obj.gender) || null;
    this.race = (obj && obj.race) || null;
    this.date = (obj && obj.date) || null;
    this.image = (obj && obj.image) || null;
    this.hobbies = (obj && obj.hobbies) || null;
  }
}
