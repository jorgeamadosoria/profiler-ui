import { Person } from './Person';

export class Feedback {
    id?:number;
	personFrom:Person;
	personTo:Person;
	feedback:string;
	type: string;
};

export const FeedbackType = [ 'FEEDBACK', 'KUDO' ];