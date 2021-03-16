import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class Country {
  constructor(
    public id: number,
    public nameOfCountry: string,
    public capital: string,
    public surface: number,
    public countryCode: string,
    public telephoneCode: string
  ) {
  }
}

@Component({
  selector: 'app-country',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countries!: Country[];

  constructor(
    private httpClient: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(): any {
    this.httpClient.get<any>('http://localhost:7080/api/countries/all2').subscribe(
      response => {
        console.log(response);
        this.countries = response;
      }
    );
  }
}
