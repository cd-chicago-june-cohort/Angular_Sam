import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  palette = [
    Math.floor(Math.random() * 20),
    Math.floor(Math.random() * 20),
    Math.floor(Math.random() * 20),
    Math.floor(Math.random() * 20),
    Math.floor(Math.random() * 20),
    Math.floor(Math.random() * 20),
    Math.floor(Math.random() * 20),
    Math.floor(Math.random() * 20),
    Math.floor(Math.random() * 20),
    Math.floor(Math.random() * 20)
  ];
  colors = [
    'LightSeaGreen',
    'MediumSpringGreen',
    'MediumVioletRed',
    'MidnightBlue',
    'Plum',
    'Salmon',
    'SkyBlue',
    'SlateBlue',
    'Teal',
    'Violet',
    'Turquoise',
    'Tomato',
    'PaleGreen',
    'DeepPink',
    'Orange',
    'Navy',
    'Indigo',
    'GreenYellow',
    'Gold',
    'DeepSkyBlue'
  ]
}
