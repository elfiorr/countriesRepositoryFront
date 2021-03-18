import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CountriesComponent} from './country/countries.component';
import {CitiesComponent} from './cities/cities.component';
import {ContinentsComponent} from './continents/continents.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'country', component: CountriesComponent},
  {path: 'city', component: CitiesComponent},
  {path: 'continent', component: ContinentsComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
