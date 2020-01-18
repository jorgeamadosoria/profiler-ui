import { Component, OnInit } from '@angular/core';
import { AttributeType, Attribute } from 'src/app/entities/Attribute';
import { AttributeRel } from 'src/app/entities/AttributeRel';
import { Service } from 'src/app/service/service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-upsert',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  private path = 'controllers/attributes/rel';
  model = { attribute: new Attribute({}), rels: Array<AttributeRel>() };
  types = AttributeType;
  constructor(
    private service: Service,
    private route: Router,
    private actRoute: ActivatedRoute) {
    }

  ngOnInit() {

    this.actRoute.params.subscribe((routeParams: { id: number; }) => {
      if (routeParams.id) {
          this.model.rels = Array<AttributeRel>();
          this.service.get(this.path, routeParams.id)
          .subscribe((data: []) => data.forEach(e => {
            this.model.rels.push(new AttributeRel(e));
            this.model.attribute = this.model.rels[0].from;
            console.log(' rels ' + this.model.rels);
          }));
        }
      });
  }

  onSubmit() {
    console.log(this.model.rels);
    this.service.upsertList(this.path, this.model.rels)
    .subscribe(() => this.route.navigate(['attributes/list']));
  }


}
