import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

export class Continent {
  constructor(
    public id: number,
    public nameOfContinent: string
  ) {
  }
}

@Component({
  selector: 'app-continents',
  templateUrl: './continents.component.html',
  styleUrls: ['./continents.component.css']
})
export class ContinentsComponent implements OnInit {

  continents!: Continent[];
  continent!: Continent;

  constructor(
    private httpClient: HttpClient,
    private modalService: NgbModal
  ) {
  }

  ngOnInit(): void {
    this.getContinents();
  }

  getContinents(): any {
    this.httpClient.get<any>('http://localhost:7080/api/continents/all').subscribe(
      response => {
        console.log(response);
        this.continents = response;
      }
    );
  }

  openDetails(targetModal: any, continent: Continent): any {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
    // @ts-ignore
    document.getElementById('nameOfContinentDetails').setAttribute('value', continent.nameOfContinent);
  }
}
