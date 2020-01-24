import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/service/service';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { Profile } from 'src/app/entities/Profile';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  private path = 'controllers/profiles';
  items: Array<Profile>;

  constructor(
    private service: Service
  ) { }

  listCallback(data: any) {
      this.items = data;
      this.items = this.items.filter(d => d.description != null);
      console.log(this.items);
  }

  ngOnInit() {
    this.service.list(this.path).subscribe( data => this.listCallback(data));
  }

  onDelete(id: number) {
    this.service.delete(this.path, id).subscribe(data => this.items = this.items.filter((value) => value.id !== id));
  }

}
