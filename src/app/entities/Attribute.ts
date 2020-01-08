import { ProfileAttributes } from './ProfileAttributes';

export class Attribute {
    id?:number;
    name:string;
	description:string;
	type: string;
	profiles: ProfileAttributes[];
};

export const AttributeType = ['SOFT', 'HARD', 'OTHER'];