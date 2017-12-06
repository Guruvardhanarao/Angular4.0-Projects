import { Injectable } from '@angular/core';
import { EmployeeModel } from '../shared/employee.model';
import { employeeMock } from '../shared/employeeMock';

@Injectable()
export class EmployeeService {

  constructor() { }


  getEmployee(): EmployeeModel[] {
     return employeeMock;
  }

}
