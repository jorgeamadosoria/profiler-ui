import { Component, OnInit } from '@angular/core';
import { ProfileAttributes } from 'src/app/entities/ProfileAttributes';
import { Service } from 'src/app/service/service';
import { ActivatedRoute, Router } from '@angular/router';
import { Profile } from 'src/app/entities/Profile';

@Component({
  selector: 'app-upsert',
  templateUrl: './upsert.component.html',
  styleUrls: ['./upsert.component.scss']
})
export class UpsertComponent implements OnInit {
  private path = 'controllers/profiles';
  model: Profile;
  constructor(
    private service: Service,
    private route: Router,
    private actRoute: ActivatedRoute) {
    }

  ngOnInit() {
    console.log(this.route);
    this.model = new Profile({});
    this.actRoute.params.subscribe((routeParams: { id: number; }) => {
    //  console.log(routeParams.id);
      if (routeParams.id) {
          this.service.get(this.path, routeParams.id)
          .subscribe((data) => this.model = new Profile(data));
        }
      });
  }

  onSubmit() {
    console.log(this.model);
    this.service.upsert(this.path, this.model).subscribe(data => this.route.navigate(['person/list']));
    //  console.log('submitted');
  }


}
