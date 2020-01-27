import { Attribute } from './Attribute';
import { Profile } from './Profile';
import { Endorsement } from './Endorsement';

export class ProfileAttributes {
    id?: number;
    attribute: Attribute;
    level: number;
    endorser: number;
    count = 0;
    constructor(data: any = {}) {
         this.id = data.id;
         this.attribute = data.attribute;
         this.level = data.level;
         this.count = data.count;
         this.endorser = data.endorser;
    }
}
