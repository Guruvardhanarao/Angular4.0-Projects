import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class ProfileService {

    constructor(private http: Http){   }

    public saveProfile(pObj) {
        let url: string = 'https://reqres.in/api/users';
        return this.http.post(url, pObj)
        .map(res => res.json());
    }

}