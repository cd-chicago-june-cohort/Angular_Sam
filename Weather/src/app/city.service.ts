import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class CityService {
  constructor(private _http: Http) {}

  retrieveWeather(city) {
    var chi_url = "http://api.openweathermap.org/data/2.5/weather?q="+ city + "&units=imperial&APPID=235e37b59bc2368babbe5494832de925"
    return this._http.get(chi_url).map(data => data.json()).toPromise();
  }


}
