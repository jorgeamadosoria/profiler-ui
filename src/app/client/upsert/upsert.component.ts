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
  private path:string='controllers/organizations/';
  model: Organization;
  constructor(
    private service: Service,
    private route: ActivatedRoute) 
  { }

  ngOnInit() {
    var id = +this.route.snapshot.paramMap.get("id");
    this.service.get(this.path,id).subscribe((data) => this.model = new Organization(data));
    this.model = new Organization();
  }

  onSubmit() { 
    this.service.upsert(this.path,this.model);
    console.log('submitted'); 

}


  onReset() { this.model = new Organization(); console.log('reset'); }
}
