import { Component } from '@angular/core';
import { QuoteformComponent } from './quoteform/quoteform.component';
import { QuotelistComponent } from './quotelist/quotelist.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  quotes = [];
  sendQuote(quote){
    console.log("quote parent: " + quote.content);
    this.quotes.push(quote);
  }
  emitUp(index) {
    for(var i =0; i < this.quotes.length; i+= 1) {
      if (this.quotes[i-1] && this.quotes[i].rating > this.quotes[i-1].rating){
        let temp = this.quotes[i]
        this.quotes[i] = this.quotes[i - 1]
        this.quotes[i-1] = temp;
      }
    }
  }
  emitDown(index){
    for(var i =0; i < this.quotes.length; i+= 1) {
      if (this.quotes[i-1] && this.quotes[i].rating > this.quotes[i-1].rating){
        let temp = this.quotes[i]
        this.quotes[i] = this.quotes[i - 1]
        this.quotes[i-1] = temp;
      }
    }
  }

}
