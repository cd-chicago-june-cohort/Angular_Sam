import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CityService } from '../city.service';

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {

  weather;
  city = 'San Jose'
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
