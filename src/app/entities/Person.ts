import { Organization } from './Organization';
import { Profile } from './Profile';

export class Person {
    id?: number;
    firstName: string;
    lastName: string;
    description: string;
    location: string;
    picture: string;
    status: string;
    profile: Profile;
    organization: Organization;
    constructor(data: any) {
        this.id = data.id;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.description = data.description;
        this.location = data.location;
        this.picture = data.picture;
        this.status = data.status;
        this.profile = data.profile;
        this.organization = data.organization;
    }
}

export const PersonStatus = ['ASSIGNED', 'AVAILABLE'];
