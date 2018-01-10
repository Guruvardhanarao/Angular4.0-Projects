import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuoteBoxComponent } from './quote-box/quote-box.component';

import { RandomQuoteService } from '../services/random-quote.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,QuoteBoxComponent
  ],
  providers: [RandomQuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
