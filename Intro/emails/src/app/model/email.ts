export class Email {
	time: number;
	to: string;
	from: string;
	subject: string;
	body: string;
	read: boolean;

	constructor(obj?: any) {
		this.time = obj && obj.time || null;
		this.to = obj && obj.to || null;
		this.from = obj && obj.from || null;
		this.subject = obj && obj.subject || null;
		this.body = obj && obj.body || null;
		this.read = obj && obj.read || null;
	}
}