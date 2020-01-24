import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private path = 'controllers/persons';
  items: any;
  constructor(
    private service: Service,
    private route: Router
  ) { }

  onSubmit() {
    this.route.navigate(['client']);
  }


  listCallback(data: any) {
    this.items = data;
    console.log(this.items);
}

ngOnInit() {
  this.service.list(this.path).subscribe( data => this.listCallback(data));
}

}
