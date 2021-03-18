import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CountriesComponent} from './country/countries.component';
import {HomeComponent} from './home/home.component';
import {CitiesComponent} from './cities/cities.component';
import {ContinentsComponent} from './continents/continents.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    HomeComponent,
    CitiesComponent,
    ContinentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
