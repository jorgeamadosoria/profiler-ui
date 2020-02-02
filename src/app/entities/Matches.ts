import { MatchedAttribute } from './MatchedAttribute';
import { Profile } from './Profile';
import { Match } from './Match';

export class Matches {
    matches: Array<Match>;
    selectedAlgorithm: string;
    constructor(data: Array<Match>, selectedAlgorithm: string) {
        this.matches = data;
        this.selectedAlgorithm = selectedAlgorithm;
    }
}
