import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from 'src/app/service/service';
import { Person } from 'src/app/entities/Person';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { KudosComponent } from 'src/app/kudos/kudos.component';
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
          this.service.get(this.path, routeParams.id)
          .subscribe((data) => this.detailCallback(data));
      });
  }

  endorse(attr: ProfileAttributes) {
    const endorsement = new Endorsement({
        person: this.service.loggedUser,
        profileAttributes: attr,
    });
    this.service.upsert(this.pathEnd, endorsement
    ).subscribe(data => attr.endorsed = true);
  }
}
