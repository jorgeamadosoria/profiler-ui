import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  private path:string='controllers/organizations/';
  items: any;

  constructor(
    private service: Service
    
  ) { }

  listCallback(data:any){
      this.items = data;
      console.log(this.items);
  }

  ngOnInit() {
    this.service.list(this.path).subscribe( this.listCallback);
  }

}
