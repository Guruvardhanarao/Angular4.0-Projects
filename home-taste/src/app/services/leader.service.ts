import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { Http, Response } from '@angular/http';

import { RestangularModule, Restangular } from 'ngx-restangular'

import { ProcessHttpmsgService } from '../services/process-httpmsg.service';
import { baseURL } from '../shared/baseurl';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';


@Injectable()
export class LeaderService {
  
   leaders: Leader[];
  
  constructor(private processHttpMsgService: ProcessHttpmsgService, private restangular: Restangular) { }

  getLeaders(): Observable<Leader[]> {
     return this.restangular.all('leaders').getList();
    
  }

  getFeaturedLeader(): Observable<Leader> {
      return this.restangular.all('leaders').getList({featured: true})
        .map(leaders => leaders[0]);
  
  }

}
