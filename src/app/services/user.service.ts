import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global'; // variables globales de global.ts
import { User } from '../models/user'; // clase users.ts

@Injectable()
export class UserService {
  public url: string;
  public identity;
  public token;

  constructor(
    public _http: HttpClient
  ) {
    this.url = GLOBAL.url;
  }

  pruebas() {
    return 'Hola mundo';
  }

  register(user): Observable<any> {
    const json = JSON.stringify(user);
    const params = 'json=' + json;

    const headers = new HttpHeaders().set('content-type', 'application/x-www-form-urlencoded');

    return this._http.post(this.url + 'register', params, {headers});
  }

  signup(user, getToken = null): Observable<any> {
    if (getToken != null) {
      user.getToken = 'true';
    }
    const json = JSON.stringify(user);
    const params = 'json=' + json;

    const headers = new HttpHeaders().set('content-type', 'application/x-www-form-urlencoded');

    return this._http.post(this.url + 'login', params, {headers});
  }

  getIdentity() {
    const identity = JSON.parse(localStorage.getItem('identity'));
    if (identity !== 'undefined') {
      this.identity = identity;

    } else {
      this.identity = null;
    }
    return this.identity;
  }

  getToken() {
    const token = localStorage.getItem('token');

    if(token !== "undefinded") {
      this.token = token;
    } else {
      this.token = null;
    }

    return this.token;

  }
}
