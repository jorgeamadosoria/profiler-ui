import { Attribute } from './Attribute';
import { Profile } from './Profile';

export class ProfileAttributes {
    id?: number;
    attribute: Attribute;
    level: number;
    endorsed: boolean;
    constructor(data: any = {}) {
         this.id = data.id;
         this.attribute = data.attribute;
         this.level = data.level;
         this.endorsed = data.endorsed;
    }
}
