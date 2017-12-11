import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AccountsService } from '../shared/accounts.service';
import { AccountModel } from '../shared/account.model';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  @Output() tAccts: EventEmitter<any> = new EventEmitter();
  myAccounts: AccountModel[];
  noOfAccounts: number;
  selectedAcc: any; 
  year: boolean = false;
  month: boolean = false;
  week: boolean = false;
  day:boolean = false;
  constructor(private accountsService: AccountsService) { }

  ngOnInit() {
    this.allAccounts();
  }

  allAccounts() {
    this.myAccounts = this.accountsService.getAccounts();
    this.noOfAccounts = this.myAccounts.length;
    this.tAccts.emit(this.noOfAccounts);
  }

  sendDetails(acc) {
    this.selectedAcc = acc;
  }
  
  getYear(){
    this.year = true;
  }

  getMonth(){
    this.month = true;
  }

  getWeek(){
    this.week = true;
  }

  getDay(){
    this.day = true;
  }

}
