import { MatchedAttribute } from './MatchedAttribute';
import { Profile } from './Profile';
import { Match } from './Match';

export class Matches {
    matches: Array<Match>;
    constructor(data: Array<Match>) {
        this.matches = data;
    }
}
