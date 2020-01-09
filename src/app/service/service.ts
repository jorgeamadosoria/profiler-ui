import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Service {
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
    });

  constructor(
    private http: HttpClient
  ) { }

  public list(path:string) {
    return this.http.get(environment.URL + "/" + path,{headers:this.headers});
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
