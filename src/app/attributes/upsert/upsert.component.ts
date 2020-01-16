import { Component, OnInit } from '@angular/core';
import { Attribute,AttributeType } from 'src/app/entities/Attribute';
import { AttributeRel } from 'src/app/entities/AttributeRel';
import { Service } from 'src/app/service/service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-upsert',
  templateUrl: './upsert.component.html',
  styleUrls: ['./upsert.component.scss']
})
export class UpsertComponent implements OnInit {
  private path = 'controllers/attributes';
  private pathRel = 'controllers/attributes/rel';
  model: Attribute;
  rels = Array<AttributeRel>();
  types = AttributeType;
  constructor(
    private service: Service,
    private route: Router,
    private actRoute: ActivatedRoute) {
    }

  ngOnInit() {
    console.log(this.route);
    this.model = new Attribute({});
    this.actRoute.params.subscribe((routeParams: { id: number; }) => {
      if (routeParams.id) {
          this.service.get(this.path, routeParams.id)
          .subscribe((data) => this.model = new Attribute(data));
          this.service.get(this.pathRel, routeParams.id)
          .subscribe((data: []) => data.forEach(e => {this.rels.push(new AttributeRel(e));console.log(this.rels);}));
        }
      });
  }

  onOptionsSelected(event:any){
    console.log('onOptionsSelected ' +event); //option value will be sent as event
  }

  onSubmit() {
    console.log(this.model);
    this.service.upsert(this.path, this.model).subscribe(data => this.route.navigate(['attributes/list']));
    this.service.upsertList(this.path, this.rels).subscribe();
    //  console.log('submitted');
  }


  onReset() { 
    this.model = new Attribute({id:this.model.id}); 
    //console.log('reset'); 
  }
}
