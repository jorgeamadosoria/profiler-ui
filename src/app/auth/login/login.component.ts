import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from 'src/app/service/service';
import { Person, Login } from 'src/app/entities/Person';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private path = 'controllers/persons';
  model: Login;
  constructor(
    private service: Service,
    private route: Router
  ) { }

  onSubmit() {
    this.service.loggedUser = this.model.logged;
    this.route.navigate(['/person']);
  }


  listCallback(data: any) {
    this.model.users = data;
    this.model.logged = this.model.users[0];
}

ngOnInit() {
  this.model = new Login();
  this.service.list(this.path).subscribe( data => this.listCallback(data));
}

}
