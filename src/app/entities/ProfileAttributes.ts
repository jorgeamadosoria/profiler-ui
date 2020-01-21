import { Attribute } from './Attribute';
import { Profile } from './Profile';

export class ProfileAttributes {
    id?: number;
    attribute: Attribute;
    level: number;
    constructor(data: any = {}) {
         this.id = data.id;
         this.attribute = data.attribute;
         this.level = data.level;
    }
}
