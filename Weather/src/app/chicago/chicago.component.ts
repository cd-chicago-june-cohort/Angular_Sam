import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CityService } from '../city.service';
@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  weather;
  city = 'Chicago'
  constructor(private _cityService: CityService) { }
  ngOnInit() {
    this.getChi();
  }

  getChi(): void {
    this._cityService.retrieveWeather(this.city)
      .then(weather => this.weather = weather)
      .catch(console.log);
  }

}
