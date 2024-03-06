export class Movie {
  id: number;
  name: string;
  year: number;
  rating: string;
  description: string;
  duration: string;
  director: string;
  genre: string;
  image: string;

  constructor(obj?: any) {
    this.id = (obj && obj.id) || null;
    this.name = (obj && obj.name) || null;
    this.year = (obj && obj.year) || null;
    this.rating = (obj && obj.rating) || null;
    this.description = (obj && obj.description) || null;
    this.duration = (obj && obj.duration) || null;
    this.director = (obj && obj.director) || null;
    this.genre = (obj && obj.genre) || null;
    this.image = (obj && obj.image) || null;
  }
}
