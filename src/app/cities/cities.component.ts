import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';

export class City {
  constructor(
    public id: number,
    public nameOfCity: string
  ) {
  }
}

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  cities!: City[];
  editCities!: City;
  closeResults!: string;

  constructor(
    private httpClient: HttpClient,
    private modalService: NgbModal
  ) {
  }

  ngOnInit(): void {
    this.getCities();
    // this.getCityById();
  }

  getCities(): any {
    this.httpClient.get<any>('http://localhost:7080/api/cities/all').subscribe(
      response => {
        console.log(response);
        this.cities = response;
      }
    );
  }

  getCityById(): any {
    this.httpClient.get<any>('http://localhost:7080/api/countries/169').subscribe(
      response => {
        console.log(response);
        this.cities = response;
      }
    );
  }

  open(content: any): any {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResults = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResults = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onSubmit(f: NgForm): any {
    const url = 'http://localhost:7080/api/cities/addNew';
    this.httpClient.post(url, f.value)
      .subscribe((result) => {
        this.ngOnInit(); // reload the table
      });
    this.modalService.dismissAll(); // dismiss the modal
  }

  openDetails(targetModal: any, city: City): any {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
    // @ts-ignore
    document.getElementById('nameOfCityDetails').setAttribute('value', city.nameOfCity);
  }
}
