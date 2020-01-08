import { Component, OnInit } from '@angular/core';
import { Organization } from 'src/app/entities/Organization';

@Component({
  selector: 'app-upsert',
  templateUrl: './upsert.component.html',
  styleUrls: ['./upsert.component.scss']
})
export class UpsertComponent implements OnInit {

  model: Organization;
  constructor() { }

  ngOnInit() {
  }

  onSubmit() { console.log('submitted'); }
}
