import { Component, OnInit } from '@angular/core';


import { Employee } from '../shared/employee.model';

import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeelist: Employee[];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    const x = this.employeeService.getEmpList();
    x.snapshotChanges().subscribe(item => {
      this.employeelist = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.employeelist.push(y as Employee); 
      });
    });
  }

  updateEmp(emp){
    this.employeeService.selectedEmployee = Object.assign({}, emp);
  }

}
