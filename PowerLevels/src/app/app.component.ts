import { Component } from '@angular/core';
import { HumanComponent } from './human/human.component';
import { SaiyanComponent } from './saiyan/saiyan.component';
import { SupersaiyanComponent } from './supersaiyan/supersaiyan.component';
import { Supersaiyan2Component } from './supersaiyan2/supersaiyan2.component';
import { Supersaiyan3Component } from './supersaiyan3/supersaiyan3.component';
import { Supersaiyan4Component } from './supersaiyan4/supersaiyan4.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  powers = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100 ]
  powerGrab = ''
  power;
  humanPower;
  saiyanPower;
  ssPower;
  ss2Power;
  ss3Power;
  ss4Power;
  onSubmit() {
    this.power = this.powerGrab;
    this.humanPower = parseInt(this.power) * 1;
    this.saiyanPower = parseInt(this.power) * 10;
    this.ssPower = parseInt(this.power) * 90;
    this.ss2Power = parseInt(this.power) * 150;
    this.ss3Power = parseInt(this.power) * 250;
    this.ss4Power = parseInt(this.power) * 500;
  }
  constructor() { }
}
