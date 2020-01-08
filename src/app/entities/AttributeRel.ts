import { Attribute } from './Attribute';

export interface AttributeRel {
    id?:number,
    to:Attribute,
	from:Attribute,
	level:number
};


