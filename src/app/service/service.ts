import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Person } from '../entities/Person';

@Injectable({
  providedIn: 'root'
})
export class Service {

  loggedUser: Person;

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
    });

  constructor(
    private http: HttpClient
  ) { }

  public isLoggedUser(id: number) {
    console.log('is Logged User');
    console.log(id);
    return this.loggedUser && this.loggedUser.id === id;
  }

  public list(path: string) {
    return this.http.get(environment.URL + path, { headers: this.headers});
  }

  public search(path: string, entity: any) {
    return this.http.post(environment.URL + path, entity, { headers: this.headers});
  }

  public upsert(path: string, entity: any) {
    return this.http.post(environment.URL + path, entity, { headers: this.headers});
  }

  public upsertList(path: string, entities: any[]) {
    return this.http.post(environment.URL + path, entities, { headers: this.headers});
  }

  public delete(path: string, id: number) {
    return this.http.delete(environment.URL + path + '/' + id, { headers: this.headers});
  }

  public get(path: string, id: number) {
    return this.http.get(environment.URL + path + '/' + id, { headers: this.headers});
  }
}
