import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()

export class RandomQuoteService {

    constructor(private http: HttpClient) {

    }

    getQuote() {
        return this.http.get('https://talaikis.com/api/quotes/random/');
    }
}