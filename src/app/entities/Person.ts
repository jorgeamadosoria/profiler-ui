import { Organization } from './Organization';
import { Profile } from './Profile';

export interface Person {
    id?:number,
    firstName:string,
	lastName:string,
	description:string,
	location:string,
	picture:string,
	status:string,
	profile:Profile,
	organization:Organization
}

export const PersonStatus = ['ASSIGNED', 'AVAILABLE'];