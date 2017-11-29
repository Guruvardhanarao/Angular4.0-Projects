import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()


export class CountriesService {



    constructor(private http: Http) {}

    getCountries(){
        let _url: string = 'https://restcountries.eu/rest/v2/all';
        return this.http.get(_url);
    }

    getCountry(selectedCountry: string){
        let _url: string = 'https://restcountries.eu/rest/v2/name/'+selectedCountry+'?fullText=true';
        return this.http.get(_url);
    }
}