import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
const Url = 'https://latin2-abdd8.firebaseio.com/';
const EndUrl ='.json?auth=Pa5YMDEBIaLo6X82Kyosx9GP0zVK9fKDAAsZ28Vf';

@Injectable()
export class ServiceProvider {

  constructor(public http: Http) { }

  getCategorias(): Promise<any> {
    return this.http.get(Url + '/categorias'+ EndUrl)
      .toPromise()
      .then(resp => resp.json());
  }

  getVideos(): Promise<any> {
    return this.http.get(Url + '/videos' + EndUrl)
      .toPromise()
      .then(resp => resp.json());
  }

  getRadios(): Promise<any> {
    return this.http.get(Url + '/radios' + EndUrl)
      .toPromise()
      .then(resp => resp.json());
  }
}
