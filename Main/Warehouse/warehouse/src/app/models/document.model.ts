export class DocumentList {
  count: number;
  results: Document[];

  constructor(obj?: any) {
    this.count = (obj && obj.count) || 0;
    this.results =
      (obj &&
        obj.results &&
        obj.results.map((elem: any) => new Document(elem))) ||
      [];
  }
}

export class Document {
  _id: number;
  dateOfRecording: string;
  dateOfCreation: string;
  transactionType: string;
  status: string;
  year: string;
  businessPartner: BusinessPartner;

  constructor(obj?: any) {
    this._id = (obj && obj._id) || 0;
    this.dateOfRecording = (obj && obj.dateOfRecording) || '';
    this.dateOfCreation = (obj && obj.dateOfCreation) || '';
    this.transactionType = (obj && obj.transactionType) || '';
    this.status = (obj && obj.status) || '';
    this.year = (obj && obj.year) || '';
    this.businessPartner =
      (obj && new BusinessPartner(obj.businessPartner)) ||
      new BusinessPartner();
    [];
  }
}

export class BusinessPartner {
  name: string;
  city: string;
  address: string;

  constructor(obj?: any) {
    this.name = (obj && obj.name) || '';
    this.city = (obj && obj.city) || '';
    this.address = (obj && obj.address) || '';
  }
}
