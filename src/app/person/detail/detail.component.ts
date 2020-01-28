import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from 'src/app/service/service';
import { Person } from 'src/app/entities/Person';
import { ProfileAttributes } from 'src/app/entities/ProfileAttributes';
import { Endorsement } from 'src/app/entities/Endorsement';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  private path = 'controllers/persons';
  private pathEnd = 'controllers/endorsements';
  model: Person;
  constructor(
    private service: Service,
    private actRoute: ActivatedRoute) { }

  detailCallback(data: any) {
      this.model = new Person(data);
  }

  ngOnInit() {
    this.actRoute.params.subscribe((routeParams: { id: number; }) => {
          this.service.get(this.path
          + '/' + this.service.loggedUser.id, routeParams.id)
          .subscribe((data) => this.detailCallback(data));
      });
  }

  endorse(attr: ProfileAttributes) {
    const endorsement = new Endorsement({
        person: this.service.loggedUser,
        profileAttributes: attr,
    });
    this.service.upsert(this.pathEnd, endorsement
    ).subscribe((data: Endorsement) => {attr.endorser = data.id; attr.count++; });
  }

  unendorse(attr: ProfileAttributes) {

    this.service.delete(this.pathEnd, attr.endorser
    ).subscribe(data => {attr.endorser = null; attr.count--; });
  }
}
