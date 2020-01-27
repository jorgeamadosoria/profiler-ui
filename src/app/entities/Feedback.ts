import { Person } from './Person';

export class Feedback {
    id?: number;
    personFrom: Person;
    personTo: Person;
    feedback: string;
    type: string;
    constructor(data: any) {
        this.id = data.id;
        this.personFrom = data.personFrom;
        this.personTo = data.personTo;
        this.feedback = data.feedback;
        this.type = data.type;
    }
}

export const FeedbackType = [ 'FEEDBACK', 'KUDO' ];
