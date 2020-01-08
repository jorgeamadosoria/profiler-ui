import { Person } from './Person';

export interface Feedback {
    id?:number,
	personFrom:Person,
	personTo:Person,
	feedback:string,
	type: string
};

export const FeedbackType = [ 'FEEDBACK', 'KUDO' ];