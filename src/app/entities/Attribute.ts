import { ProfileAttributes } from './ProfileAttributes';

export interface Attribute {
    id?:number,
    name:string,
	description:string,
	type: string,
	profiles: ProfileAttributes[]
};

export const AttributeType = ['SOFT', 'HARD', 'OTHER'];