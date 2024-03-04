export class Artwork {
  _id: number;
  exibition_id: number;
  title: string;
  beginYear: number;
  endYear: number;
  medium: string;
  dimensions: string;
  author: string;
  description: string;
  imageId: string;

  constructor(obj?: any) {
    this._id = (obj && obj._id) || 0;
    this.exibition_id = (obj && obj.exibition_id) || 0;
    this.title = (obj && obj.title) || '';
    this.beginYear = (obj && obj.beginYear) || 0;
    this.endYear = (obj && obj.endYear) || 0;
    this.medium = (obj && obj.medium) || 0;
    this.dimensions = (obj && obj.dimensions) || 0;
    this.author = (obj && obj.author) || 0;
    this.description = (obj && obj.description) || 0;
    this.imageId = (obj && obj.imageId) || 0;
  }
}
