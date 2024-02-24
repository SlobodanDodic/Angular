export class Wine {
    id: number;
	name: string;
	description: string;
	year: number;
	country: string;
	picture: string;

	constructor(obj?: any) {
		this.id = obj && obj.id || null;
		this.name = obj && obj.name || null;
		this.year = obj && obj.year || null;
		this.country = obj && obj.country || null;
		this.description = obj && obj.description || null;
		this.picture = obj && obj.picture || null;
	}

}
