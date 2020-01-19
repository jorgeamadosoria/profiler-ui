import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from 'src/app/service/service';
import { Profile } from 'src/app/entities/Profile';
import { Person } from 'src/app/entities/Person';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  private path = 'controllers/profiles';
  model: Profile;
  constructor(
    private service: Service,
    private actRoute: ActivatedRoute) { }

  detailCallback(data: any) {
      console.log(data);
      this.model = new Profile(data);
  }

  ngOnInit() {
    this.actRoute.params.subscribe((routeParams: { id: number; }) => {
          this.service.get(this.path, routeParams.id)
          .subscribe((data) => this.detailCallback(data));
      });
  }

}
