import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/service/service';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  private path:string='controllers/organizations/';
  items: any;

  constructor(
    private service: Service,
    private route: ActivatedRoute
  ) { }

  listCallback(data:any){
      this.items = data;
      console.log(this.items);
  }

  ngOnInit() {
    this.service.list(this.path).subscribe( data => this.listCallback(data));
  }

  gotoAdd(){

  }

}
