import { Component, OnInit } from '@angular/core';
import { Person, PersonStatus, PersonModel } from 'src/app/entities/Person';
import { Service } from 'src/app/service/service';
import { ActivatedRoute, Router } from '@angular/router';
import { Organization } from 'src/app/entities/Organization';
import { ProfileAttributes } from 'src/app/entities/ProfileAttributes';
import { Attribute } from 'src/app/entities/Attribute';

@Component({
  selector: 'app-upsert',
  templateUrl: './upsert.component.html',
  styleUrls: ['./upsert.component.scss']
})
export class UpsertComponent implements OnInit {
  private path = 'controllers/persons';
  private pathOrgs = 'controllers/organizations';
  private pathAttr = 'controllers/profiles/attr';
  model: PersonModel;
  organizations: Array<Organization>;
  statusList = PersonStatus;
  constructor(
    private service: Service,
    private route: Router,
    private actRoute: ActivatedRoute) {
    }

  ngOnInit() {
    this.model = new PersonModel({});

    this.actRoute.params.subscribe((routeParams: { id: number; }) => {

      this.service.list(this.pathAttr).subscribe((data: Array<Attribute>) => {
        this.model.attributes = data;

        if (routeParams.id) {
            // get person
            this.service.get(this.path + '/' + this.service.loggedUser.id, routeParams.id)
            .subscribe((data2) => {
              console.log('data 2');
              console.log(data2);
              this.model.person = new Person(data2);
              console.log(this.model.person.profile.attributes);
              // filter attr to only show unassigned ones
              this.model.attributes = this.model.attributes
              .filter(d => !this.model.person.profile.attributes.find(pAttr => pAttr.attribute.id === d.id));
              this.model.selectedAttribute = this.model.attributes[0];
              this.model.selectedLevel = 1;
            });
          } else {
            // set full attr list
            this.model.attributes = data;
            this.model.selectedAttribute = this.model.attributes[0];
            this.model.selectedLevel = 1;
          }
        });

      this.service.list(this.pathOrgs).subscribe((data: Array<Organization>) => {
          this.organizations = data;
          // default values for the /add operation
          if (!routeParams.id) {
            this.model.person.status = this.statusList[0];
            this.model.person.organization = data[0];
          } else {
            this.model.person.organization = this.organizations
            .find(org => org.id === this.model.person.organization.id);
          }
        });
      });
  }


  onDeleteAttr(data: ProfileAttributes) {
    // remove attribute from profileAttribute list
    this.model.person.profile.attributes.splice(this.model.person.profile.attributes.indexOf(data), 1);
    console.log(JSON.stringify(this.model.person.profile.attributes));
    // put attribute back in list
    this.model.attributes.push(data.attribute);
  }

  addAttribute() {
    console.log(JSON.stringify(this.model.selectedAttribute));
    this.model.person.profile.attributes.push(new ProfileAttributes({
      attribute: new Attribute(this.model.selectedAttribute),
      level: this.model.selectedLevel
    }));
    this.model.selectedLevel = 1;
    this.model.attributes.splice(this.model.attributes.indexOf(this.model.selectedAttribute), 1);
    this.model.selectedAttribute = this.model.attributes[0];
  }


  onSubmit() {
    console.log(this.path);
    this.service.upsert(this.path, this.model.person).subscribe(data => this.route.navigate(['person/list']));
    //  console.log('submitted');
  }


}
