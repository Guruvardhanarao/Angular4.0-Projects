import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeModel } from '../../shared/employee.model';

@Component({
  selector: 'app-emp-data',
  templateUrl: './emp-data.component.html',
  styleUrls: ['./emp-data.component.css']
})
export class EmpDataComponent implements OnInit {
  @Input('eCompany') empCompany: string;
  @Input('edata') employeeList: EmployeeModel[]; 
  @Output() sendCompany: EventEmitter<any> =  new EventEmitter();

  empCompanies: Array<string> = ['Infosys', 'Wipro', 'tcs', 'tech mahindra'];
  constructor() { }

  ngOnInit() {
  }

    getCompanies() {
      this.sendCompany.emit(this.empCompanies);
    }

}
