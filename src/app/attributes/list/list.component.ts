import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  private path:string='controllers/attributes';
  items: any;

  constructor(
    private service: Service
    
  ) { }

  listCallback(data:any){
      this.items = data;
      console.log(this.items);
  }

  ngOnInit() {
    this.service.list(this.path).subscribe( data => this.listCallback(data));
  }

  onDelete(id:number){
    this.service.delete(this.path,id).subscribe(data => this.items = this.items.filter((value) => value.id != id));
  }

}
