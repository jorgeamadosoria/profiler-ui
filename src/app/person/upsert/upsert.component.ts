import { Component, OnInit } from '@angular/core';
import { Person, PersonStatus, PersonModel } from 'src/app/entities/Person';
import { Service } from 'src/app/service/service';
import { ActivatedRoute, Router } from '@angular/router';
import { Organization } from 'src/app/entities/Organization';

@Component({
  selector: 'app-upsert',
  templateUrl: './upsert.component.html',
  styleUrls: ['./upsert.component.scss']
})
export class UpsertComponent implements OnInit {
  private path = 'controllers/persons';
  private pathOrgs = 'controllers/organizations';
  model: Person;
  organizations: Array<Organization>;
  statusList = PersonStatus;
  constructor(
    private service: Service,
    private route: Router,
    private actRoute: ActivatedRoute) {
    }

  ngOnInit() {
    console.log(this.route);
    this.model = new Person({});
    this.actRoute.params.subscribe((routeParams: { id: number; }) => {
        if (routeParams.id) {
          this.service.get(this.path, routeParams.id)
          .subscribe((data) => this.model = new Person(data));
        }
        console.log(this.model);
        this.service.list(this.pathOrgs).subscribe((data: Array<Organization>) => {
          this.organizations = data;
          // default values for the /add operation
          if (!routeParams.id) {
            this.model.status = this.statusList[0];
            this.model.organization = data[0];
          } else {
            this.model.organization = this.organizations
            .find(org => org.id === this.model.organization.id);
          }
        });
      });
  }

  onSubmit() {
    console.log(this.model);
    this.service.upsert(this.path, this.model).subscribe(data => this.route.navigate(['person/list']));
    //  console.log('submitted');
  }


}
