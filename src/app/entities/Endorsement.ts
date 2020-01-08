import { ProfileAttributes } from './ProfileAttributes';
import { Person } from './Person';

export class Endorsement {
    id?:number;
	person:Person;
	profileAttributes:ProfileAttributes;
	comment:string;
};