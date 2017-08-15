import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { SeattleComponent } from './seattle/seattle.component';
import { WdcComponent } from './wdc/wdc.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { DallasComponent } from './dallas/dallas.component';
import { BurbankComponent } from './burbank/burbank.component';
import { HttpModule } from '@angular/http';
import { CityService } from './city.service';


@NgModule({
  declarations: [
    AppComponent,
    ChicagoComponent,
    SeattleComponent,
    WdcComponent,
    SanJoseComponent,
    DallasComponent,
    BurbankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [CityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
