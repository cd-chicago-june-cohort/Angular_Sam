import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quoteform',
  templateUrl: './quoteform.component.html',
  styleUrls: ['./quoteform.component.css']
})
export class QuoteformComponent implements OnInit {
  @Output() sendQuote = new EventEmitter();
  constructor() { }
  quote = {speaker: '', content: '', rating: 0}
  emitQuote(){
    this.sendQuote.emit(this.quote); 
    console.log("quote: " + this.quote.content);
    this.quote = {speaker: '', content: '', rating: 0}
  }
  ngOnInit() {
  }

}
