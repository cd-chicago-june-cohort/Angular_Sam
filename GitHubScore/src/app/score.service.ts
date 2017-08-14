import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class ScoreService {
  constructor(private _http: Http) { }

  url = ''

  retrieveScores(username) {
    this.url='https://api.github.com/users/' + username;
    return this._http.get(this.url).map(data => data.json()).toPromise();
  }

}
