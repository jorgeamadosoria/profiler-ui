import { ProfileAttributes } from './ProfileAttributes';

export class Attribute {
    id?: number;
    name: string;
    description: string;
    type: string;
    profiles: ProfileAttributes[];
    constructor(data: any = {}) {
        this.id = data.id;
        this.name = data.name;
        this.description = data.description;
        this.type = data.type;
        this.profiles = data.profiles;
    }
}

export const AttributeType = ['SOFT', 'HARD', 'OTHER'];
