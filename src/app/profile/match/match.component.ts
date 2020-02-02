import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from 'src/app/service/service';
import { Profile } from 'src/app/entities/Profile';
import { Matches } from 'src/app/entities/Matches';
import { Match } from 'src/app/entities/Match';
import { DeprecatedI18NPipesModule } from '@angular/common';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {
  private path = 'controllers/profiles/match';
  model: Matches;
  algorithms = ['Max score', 'Closest match'];
  constructor(
    private service: Service,
    private actRoute: ActivatedRoute) { }


  matchCallback(data: any) {
    this.model = new Matches(data, this.model.selectedAlgorithm);
  }

  searchCallback(model: Matches, id: number) {
    this.service.search(this.path, new Match({profileA: new Profile({id}), algorithmName: model.selectedAlgorithm}))
    .subscribe((data) => this.matchCallback(data));

}

match() {
  console.log(this.model.selectedAlgorithm);
  this.actRoute.params.subscribe((routeParams: { id: number; }) => this.searchCallback(this.model, routeParams.id));
}

  ngOnInit() {
    console.log(this.algorithms);
    this.model = new Matches([], this.algorithms[0]);
    this.match();
  }

}
