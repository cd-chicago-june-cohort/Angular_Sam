import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CityService } from '../city.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {

  weather;
  city = 'Burbank'
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
