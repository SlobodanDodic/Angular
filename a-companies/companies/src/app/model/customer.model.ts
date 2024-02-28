export class Customer {
  _id: number;
  isActive: boolean;
  balance: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  registered: string;
  payments: Payment[];

  constructor(obj?: any) {
    this._id = (obj && obj._id) || 0;
    this.isActive = (obj && obj.isActive) || false;
    this.balance = (obj && obj.balance) || '';
    this.name = (obj && obj.name) || '';
    this.company = (obj && obj.company) || '';
    this.email = (obj && obj.email) || '';
    this.phone = (obj && obj.phone) || '';
    this.address = (obj && obj.address) || '';
    this.registered = (obj && obj.registered) || '';
    this.payments = (obj && new Payment(obj.payments)) || new Payment();
  }
}

export class Payment {
  id: number;
  amount: string;
  timestamp: string;

  constructor(obj?: any) {
    this.id = (obj && obj._id) || 0;
    this.amount = (obj && obj.amount) || '';
    this.timestamp = (obj && obj.timestamp) || '';
  }
}
