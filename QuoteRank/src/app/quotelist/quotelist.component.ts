import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quotelist',
  templateUrl: './quotelist.component.html',
  styleUrls: ['./quotelist.component.css']
})
export class QuotelistComponent implements OnInit {
  @Input() quotes
  @Output() emitUp = new EventEmitter();
  @Output() emitDown = new EventEmitter();
  @Output() emitDelete = new EventEmitter();
  constructor() { }
  upvote(i){
    this.quotes[i].rating +=1;
    this.emitUp.emit(this.quotes); 
  }
  downvote(i){
    this.quotes[i].rating -=1;
    this.emitDown.emit(this.quotes); 
  }
  delete(i){
    this.quotes.splice(i,1);
    this.emitDelete.emit(this.quotes); 
  }
  ngOnInit() {
  }

}
