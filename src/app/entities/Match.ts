import { MatchedAttribute } from './MatchedAttribute';
import { Profile } from './Profile';
import { Person } from './Person';

export class Match {
    profileA: Profile;
    profileB: Profile;
    personB: Person;
    matchedAttributes: Array<MatchedAttribute>;
    matchScore: number;
    algorithmName: string;
    constructor(data: any = {}) {
        this.personB = data.personB;
        this.profileA = data.profileA;
        this.profileB = data.profileB;
        this.matchedAttributes = data.matchedAttributes;
        this.matchScore = data.matchScore;
        this.algorithmName = data.algorithmName;
    }
}
