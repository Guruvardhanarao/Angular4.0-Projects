import { Injectable } from '@angular/core';
import { employeesList  } from './employee-mock';
import { Employee } from './employee';

@Injectable()
export class EmployeeService {

  constructor() { }

  getEmployees(): Promise<Employee[]> {
    return Promise.resolve(employeesList);
  }

}
