import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Employee } from './employee.model';

@Injectable()
export class EmployeeService {
  employeeList: AngularFireList<any>;
  selectedEmployee: Employee = new Employee();

  constructor(private firebase: AngularFireDatabase) { }

  insertEmployeeData(empData: Employee) {
    this.employeeList.push(
      {
        name: empData.name,
        position: empData.position,
        salary: empData.salary,
        office: empData.office
        
      }
    );
  }

  getEmpList() {
    this.employeeList = this.firebase.list("employees");
    return this.employeeList;
  }

  updateForm(empdata: Employee) {
    this.employeeList.update(empdata.$key, {
      name: empdata.name,
      position: empdata.position,
      salary: empdata.salary,
      office: empdata.office

    })
  }

  deleteEmployee(key) {
    this.employeeList.remove(key);
  }

}
