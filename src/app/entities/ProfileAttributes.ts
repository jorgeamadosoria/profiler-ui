import { Attribute } from './Attribute';
import { Profile } from './Profile';

export interface ProfileAttributes {
    id?:number,
    profile:Profile,
	attribute:Attribute,
	level:number;
}