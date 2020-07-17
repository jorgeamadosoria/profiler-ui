import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    public service: Service) { }

  ngOnInit() {
  }

  logout() {
    this.service.loggedUser = null;
  }
}
