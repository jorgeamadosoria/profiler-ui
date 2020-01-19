export class Organization {
    id?: number;
    name: string;
    description: string;
    logo: string;

    constructor(data: any = {}) {
        this.id = data.id;
        this.name = data.name;
        this.description = data.description;
        this.logo = data.logo;
    }
}
