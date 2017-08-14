import { Component } from '@angular/core';
import { ScoreService } from './score.service';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = ''
  user;

  constructor(private _scoreService: ScoreService) {}
  getScores() {
    this._scoreService.retrieveScores(this.username)
    .then(scores => {this.user = scores})
      .catch(err => console.log(err));
  }

  

}
