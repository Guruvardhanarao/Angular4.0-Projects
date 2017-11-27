import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { Http, Response } from '@angular/http';
import { ProcessHttpmsgService } from '../services/process-httpmsg.service';
import { baseURL } from '../shared/baseurl';

import { RestangularModule, Restangular } from 'ngx-restangular';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

@Injectable()
export class PromotionsService {

  constructor(private restangular: Restangular,
              private processHttpMsgServive: ProcessHttpmsgService) { }

  getPromotingDishes(): Observable<Promotion[]> {
    return this.restangular.all('promotions').getList();
  }

}
