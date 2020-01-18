import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from 'src/app/service/service';
import { Organization } from 'src/app/entities/Organization';
import { Person } from 'src/app/entities/Person';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  private path = 'controllers/organizations';
  model: Person;
  constructor(
    private service: Service,
    private actRoute: ActivatedRoute) { }

  detailCallback(data: any) {
      console.log(data);
      this.model = new Person(data);
  }

  ngOnInit() {
    this.actRoute.params.subscribe((routeParams: { id: number; }) => {
          this.service.get(this.path, routeParams.id)
          .subscribe((data) => this.detailCallback(data));
      });
  }

}
