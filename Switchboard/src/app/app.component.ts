import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  num = Math.floor(Math.random() * 2);
  board = [false,false,false,false,false,false,false,false,false,false]
  switch(num, bool){
    if (bool){
      this.board[num] = false;
    } else {
        this.board[num] = true;
    }
      return;
  }
}
