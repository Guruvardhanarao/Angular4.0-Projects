import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './shared/employee.service';

import { Employee } from './shared/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Promises Practice';
  empList: Employee[];
  empName: string;
  searchedEmp: any;
  empIndex: number;
  error:boolean = false;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(){
    this.getAllEmployees();
  }

  
  getAllEmployees() {
   this.employeeService.getEmployees().then(empList => this.empList = empList);
  }

  searchEmployee() { 
    
    for(let i=0; i< this.empList.length; i++) {
      this.error = true;
      if(this.empList[i].name === this.empName) {
        this.searchedEmp = this.empList[i];
        this.empIndex = i+1;
        this.error=false;
        break;
      }
    }
    
    
  }
}
