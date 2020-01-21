import { ProfileAttributes } from './ProfileAttributes';
import { Attribute } from './Attribute';

export class Profile {
    id?: number;
    attributes: Array<ProfileAttributes>;
    description: string;
    constructor(data: any = {}) {
        this.id = data.id;
        this.description = data.description;
        this.attributes = (data.attributes)?data.attributes:new Array<ProfileAttributes>();
    }
}

export class ProfileModel {
    profile: Profile;
    selectedAttribute: Attribute;
    selectedLevel: number;
    attributes: Array<Attribute>;
    constructor(data: any = {}) {
        this.profile = data.profile;
        this.selectedAttribute = data.selectedAttribute;
        this.attributes = data.attributes;
        this.selectedLevel = data.selectedLevel;
    }    
}
