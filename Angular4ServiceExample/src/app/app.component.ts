import { Component } from '@angular/core';
import { EmployeeService } from './services/employee.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Simple Service To Get Employee Details';

  empId: string;
  empObj: any;
  employeeExists: boolean = false;

  constructor(private employeeService: EmployeeService) {}
  

  getEmpRecord() {
    this.empObj = this.employeeService.getEmployee(this.empId);
    if(this.empObj === true) {
      this.employeeExists=true;
    }
    
  }
}
