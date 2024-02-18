export class Pet {
  name: string;
  age: number;
  gender: string;
  breed: string;
  dateOfCreation: Date;
  imageUrl: string;
  hobbies: string[];

  constructor(obj?: any) {
    this.name = (obj && obj.name) || null;
    this.age = (obj && obj.age) || null;
    this.gender = (obj && obj.gender) || null;
    this.breed = (obj && obj.breed) || null;
    this.dateOfCreation = (obj && obj.dateOfCreation) || null;
    this.imageUrl = (obj && obj.imageUrl) || 'assets/images/pet.png';
    this.hobbies = (obj && obj.hobbies) || null;
  }
}
