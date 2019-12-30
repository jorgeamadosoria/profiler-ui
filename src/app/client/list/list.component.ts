import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  clients: any;

  constructor(
    private service: ClientService
  ) { }

  ngOnInit() {
    this.service.getClients().subscribe( (data) => {
      this.clients = data['_embedded'];
      console.log(this.clients);
    });
  }

}
