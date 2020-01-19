import { ProfileAttributes } from './ProfileAttributes';

export class Profile {
    id?: number;
    attributes: ProfileAttributes;
    description: string;
    constructor(data: any = {}) {
        this.id = data.id;
        this.attributes = data.attributes;
        this.description = data.description;
    }
}
