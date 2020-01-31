import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from 'src/app/service/service';
import { Profile } from 'src/app/entities/Profile';
import { Matches } from 'src/app/entities/Matches';
import { Match } from 'src/app/entities/Match';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {
  private path = 'controllers/profiles/match';
  model: Matches;
  constructor(
    private service: Service,
    private actRoute: ActivatedRoute) { }

  matchCallback(data: any) {
    console.log(data);
    this.model = new Matches(data);
  }

  ngOnInit() {
    this.actRoute.params.subscribe((routeParams: { id: number; }) => {
          this.service.search(this.path, new Match({profileA: new Profile({id:routeParams.id}), algorithmName: 'Max score'}))
          .subscribe((data) => this.matchCallback(data));
      });
  }

}
