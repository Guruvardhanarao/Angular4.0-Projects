import { Injectable } from '@angular/core';
import { accounts } from '../shared/accounts';

@Injectable()
export class AccountsService {

  constructor() { }

  getAccounts() {
    return accounts;
  }

}
