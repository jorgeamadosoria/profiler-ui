import { Component, OnInit } from '@angular/core';
import { AttributeType, Attribute } from 'src/app/entities/Attribute';
import { AttributeRel } from 'src/app/entities/AttributeRel';
import { Service } from 'src/app/service/service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-upsert',
  templateUrl: './rels.component.html',
  styleUrls: ['./rels.component.scss']
})
export class RelsComponent implements OnInit {
  private path = 'controllers/attributes/rel';
  rels = Array<AttributeRel>();
  attribute: Attribute;
  types = AttributeType;
  constructor(
    private service: Service,
    private route: Router,
    private actRoute: ActivatedRoute) {
    }

  ngOnInit() {

    this.actRoute.params.subscribe((routeParams: { id: number; }) => {
      if (routeParams.id) {
          this.service.get(this.path, routeParams.id)
          .subscribe((data: []) => data.forEach(e => {
            this.rels.push(new AttributeRel(e));
            this.attribute = this.rels[0].from;
            console.log(this.rels);
          }));
        }
      });
  }

  onSubmit() {
    console.log(this.rels);
    this.service.upsertList(this.path, this.rels)
    .subscribe(() => this.route.navigate(['attributes/list']));
  }


}
