import { Attribute } from './Attribute';
import { Profile } from './Profile';

export class ProfileAttributes {
    id?: number;
    profile: Profile;
    attribute: Attribute;
    level: number;
    constructor(data: any = {}) {
         this.id = data.id;
         this.profile = data.profile;
         this.level = data.level;
    }
}
