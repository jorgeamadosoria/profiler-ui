import { ProfileAttributes } from './ProfileAttributes';
import { Person } from './Person';

export interface Endorsement {
    id?:number,
	person:Person,
	profileAttributes:ProfileAttributes,
	comment:string
};