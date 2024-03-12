export class ArticleList {
  count: number;
  results: Article[];

  constructor(obj?: any) {
    this.count = (obj && obj.count) || 0;
    this.results =
      (obj &&
        obj.results &&
        obj.results.map((elem: any) => new Article(elem))) ||
      [];
  }
}

export class Article {
  _id: number;
  name: string;
  code: string;

  constructor(obj?: any) {
    this._id = (obj && obj._id) || 0;
    this.name = (obj && obj.name) || '';
    this.code = (obj && obj.code) || '';
  }
}
