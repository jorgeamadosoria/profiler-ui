import { MatchedAttribute } from './MatchedAttribute';
import { Profile } from './Profile';

export class Match {
    profileA : Profile;
	profileB: Profile;
	matchedAttributes : Array<MatchedAttribute>;
	matchScore : number;
	algorithmName : string;
    constructor(data: any = {}) {
        this.profileA = data.profileA;
        this.profileB = data.profileB;
        this.matchedAttributes = data.matchedAttributes;
        this.matchScore = data.matchScore;
        this.algorithmName = data.algorithmName;
    }
}
