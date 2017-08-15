import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CityService } from '../city.service';


@Component({
  selector: 'app-wdc',
  templateUrl: './wdc.component.html',
  styleUrls: ['./wdc.component.css']
})
export class WdcComponent implements OnInit {

  weather;
  city = 'Washington DC'
  constructor(private _cityService: CityService) { }
  ngOnInit() {
    this.getWeather();
  }

  getWeather(): void {
    this._cityService.retrieveWeather(this.city)
      .then(weather => this.weather = weather)
      .catch(console.log);
  }

}
