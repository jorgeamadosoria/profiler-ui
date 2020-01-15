import { Component, OnInit } from '@angular/core';
import { Organization } from 'src/app/entities/Organization';
import { Service } from 'src/app/service/service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-upsert',
  templateUrl: './upsert.component.html',
  styleUrls: ['./upsert.component.scss']
})
export class UpsertComponent implements OnInit {
  private path = 'controllers/organizations/';
  model: Organization;
  constructor(
    private service: Service,
    private route: ActivatedRoute) {
    }

  ngOnInit() {
    console.log(this.route);
    this.model = new Organization({});
    this.route.params.subscribe((routeParams: { id: number; }) => {
      console.log(routeParams.id);
      if (routeParams.id) {
          this.service.get(this.path, routeParams.id)
          .subscribe((data) => this.model = new Organization({id: routeParams.id}));
        }
      });
  }

  onSubmit() {
    this.service.upsert(this.path, this.model);
    console.log('submitted');

}


  onReset() { this.model = new Organization(); console.log('reset'); }
}
