import { ProfileAttributes } from './ProfileAttributes';
import { Person } from './Person';

export class Endorsement {
    id?: number;
    person: Person;
    profileAttributes: ProfileAttributes;
    comment: string;
    constructor(data: any) {
      this.id = data.id;
      this.person = data.person;
      this.profileAttributes = data.profileAttributes;
      this.comment = data.comment;
    }

}
