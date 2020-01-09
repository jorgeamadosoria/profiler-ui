import { Component, OnInit } from '@angular/core';
import { Organization } from 'src/app/entities/Organization';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-upsert',
  templateUrl: './upsert.component.html',
  styleUrls: ['./upsert.component.scss']
})
export class UpsertComponent implements OnInit {
  private path:string='controllers/organizations/';
  model: Organization;
  constructor(
    private service: Service) 
  { }

  ngOnInit() {
    this.model = new Organization();
  }

  onSubmit() { 
    this.service.upsert(this.path,this.model);
    console.log('submitted'); 

}


  onReset() { this.model = new Organization(); console.log('reset'); }
}
