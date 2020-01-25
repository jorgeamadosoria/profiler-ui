import { Organization } from './Organization';
import { Profile } from './Profile';
import { Attribute } from './Attribute';

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
        this.profile = data.profile ? data.profile : new Profile({});
        this.organization = data.organization ? data.organization : new Organization();
    }
}

export class Login {
    logged: Person;
    users: Array<Person>;
}


export class PersonModel {
    person: Person;
    selectedAttribute: Attribute;
    selectedLevel: number;
    attributes: Array<Attribute>;
    constructor(data: any = {}) {
        this.person = data.person ? data.person : new Person({});
        this.selectedAttribute = data.selectedAttribute;
        this.attributes = data.attributes;
        this.selectedLevel = data.selectedLevel;
    }
}


export const PersonStatus = ['ASSIGNED', 'AVAILABLE'];
