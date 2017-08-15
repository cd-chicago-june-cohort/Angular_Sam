import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CityService } from '../city.service';


@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {

  weather;
  city = 'Dallas'
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
