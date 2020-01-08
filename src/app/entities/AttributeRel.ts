import { Attribute } from './Attribute';

export class AttributeRel {
    id?:number;
    to:Attribute;
	from:Attribute;
	level:number;
};


