import { Component, OnInit } from '@angular/core';
import { Person, PersonStatus } from 'src/app/entities/Person';
import { Service } from 'src/app/service/service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-upsert',
  templateUrl: './upsert.component.html',
  styleUrls: ['./upsert.component.scss']
})
export class UpsertComponent implements OnInit {
  private path = 'controllers/persons';
  model: Person;
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
    //  console.log(routeParams.id);
      if (routeParams.id) {
          this.service.get(this.path, routeParams.id)
          .subscribe((data) => this.model = new Person(data));
        }
      });
  }

  onSubmit() {
    console.log(this.model);
    this.service.upsert(this.path, this.model).subscribe(data => this.route.navigate(['person/list']));
    //  console.log('submitted');
  }


  onReset() {
    this.model = new Person({id: this.model.id});
    // console.log('reset');
  }
}
