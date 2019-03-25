import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global'; // variables globales de global.ts
import { Car } from '../models/car'; // clase users.ts

@Injectable()
export class CarService {
  public url: string;

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  pruebas() {
    return 'Hola mundo';
  }

  create(token, car: Car): Observable<any> {
    const json = JSON.stringify(car);
    const params = 'json=' + json;

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', token);

    return this._http.post(this.url + 'cars', params, {headers: headers});
  }

  getCars(token): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', token);

    return this._http.get(this.url + 'cars', {headers: headers});
  }

  getCar(id): Observable<any> {
    return this._http.get(this.url + 'cars/' + id);
  }

  update(token, car, id): Observable<any> {
    const json = JSON.stringify(car);
    const params = 'json=' + json;

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', token);

    return this._http.put(this.url + 'cars/' + id, params, {headers: headers});
  }

  delete(token, id): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', token);

    return this._http.delete(this.url + 'cars/' + id, {headers: headers});
  }
}
