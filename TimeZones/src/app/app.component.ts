import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  PSTbool = false;
  MSTbool = false;
  CSTbool = false;
  ESTbool = false;
  myDate = new Date();
  dateShow = false;
  dateHide = true;

  year = this.myDate.getUTCFullYear(); 
  month = this.myDate.getUTCMonth();
  day = this.myDate.getUTCDate();
  hour = this.myDate.getUTCHours();
  minute = this.myDate.getUTCMinutes();
  second = this.myDate.getUTCSeconds();

  now = Date.UTC(this.year, this.month, this.day, this.hour, this.minute, this.second);
  zone = 0;
  showDate = new Date(this.zone);

  changeButtons(zone) {
    this.PSTbool = false;
    this.MSTbool = false;
    this.CSTbool = false;
    this.ESTbool = false;
    this.dateShow = true;
    this.dateHide = false;
    if (zone == 'PST'){
      this.PSTbool = true;
      this.zone = this.now - (3600000 * 2);
      this.showDate = new Date(this.zone);
    } else if (zone == 'MST') {
      this.MSTbool = true;
      this.zone = this.now - 3600000;
      this.showDate = new Date(this.zone);
    } else if (zone == 'CST') {
      this.CSTbool = true;
      this.zone = this.now;
      this.showDate = new Date(this.zone);
    } else {
      this.ESTbool = true;
      this.zone = this.now + 3600000;
      this.showDate = new Date(this.zone);
    }
  }

  clear(){
    this.PSTbool = false;
    this.MSTbool = false;
    this.CSTbool = false;
    this.ESTbool = false;
    this.zone = 0;
    this.showDate = new Date(this.zone);
    this.dateShow = false;
    this.dateHide = true;
  }

}
