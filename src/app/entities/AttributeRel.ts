import { Attribute } from './Attribute';

export class AttributeRel {
    id?:number;
    to:Attribute;
	from:Attribute;
    level:number;
    constructor(data:any){
        this.id = data.id;
        this.to = data.to;
        this.from = data.from;
        this.level = data.level;
    }
};


