import { Component, OnInit } from '@angular/core';
import { CountriesService } from './services/countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'All Countries Details';
  countriesObj: any;
  countryObj: any;
  selectedCountry: string;

  
  constructor(private countriesService: CountriesService){}

  ngOnInit() {
    this.countriesService.getCountries().subscribe(res => this.countriesObj = res.json());
  }

  getCountryDetails() {
    this.countriesService.getCountry(this.selectedCountry).subscribe(res => this.countryObj = res.json()[0]);
  }
    

}
