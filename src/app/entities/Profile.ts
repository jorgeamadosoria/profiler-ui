import { ProfileAttributes } from "./ProfileAttributes";

export interface Profile {
    id?:number,
    attributes:ProfileAttributes;
	description:string
};