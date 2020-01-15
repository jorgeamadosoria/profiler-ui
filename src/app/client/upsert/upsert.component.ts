import { Component, OnInit } from '@angular/core';
import { Organization } from 'src/app/entities/Organization';
import { Service } from 'src/app/service/service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-upsert',
  templateUrl: './upsert.component.html',
  styleUrls: ['./upsert.component.scss']
})
export class UpsertComponent implements OnInit {
  private path = 'controllers/organizations';
  model: Organization;
  constructor(
    private service: Service,
    private route: Router,
    private actRoute: ActivatedRoute) {
    }

  ngOnInit() {
    console.log(this.route);
    this.model = new Organization({});
    this.actRoute.params.subscribe((routeParams: { id: number; }) => {
    //  console.log(routeParams.id);
      if (routeParams.id) {
          this.service.get(this.path, routeParams.id)
          .subscribe((data) => this.model = new Organization(data));
        }
      });
  }

  onSubmit() {
    console.log(this.model);
    this.service.upsert(this.path, this.model).subscribe(data => this.route.navigate(['client/list']));
    //  console.log('submitted');
  }


  onReset() { 
    this.model = new Organization({id:this.model.id}); 
    //console.log('reset'); 
  }
}
