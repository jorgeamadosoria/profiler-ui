import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Organization } from '../entities/Organization';

@Injectable({
  providedIn: 'root'
})
export class Service {

  constructor(
    private http: HttpClient
  ) { }

  public list(path:string) {
    return this.http.get(environment.URL + "/" + path);
  }

  public upsert(path:string,entity:any) {
    return this.http.post(environment.URL + "/" + path,entity);
  }

  public delete(path:string,id:number) {
    return this.http.delete(environment.URL + "/" + path + "/" + id);
  }

  public get(path:string,id:number) {
    return this.http.get(environment.URL + "/" + path + "/" + id);
  }
}
