import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from './shared/employee.model';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Component Communications [@Input(), @Output()]';
  empData: EmployeeModel[];
  company: string = 'Get Companies';
  constructor(private employeeService: EmployeeService){}

  ngOnInit() {
    this.getAllEmpls();
  }

  getAllEmpls(){
    this.empData = this.employeeService.getEmployee();
  }

  takeCompanies(comp: any[]){
    
  }

}
