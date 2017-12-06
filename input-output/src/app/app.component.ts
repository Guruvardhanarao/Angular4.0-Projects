import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Input - Output Practice';
  tempEmpobj: any;
  public employeeRecord: any = [
    {eName: 'Poorna', eSalary: 30000, ePosition: 'Sr .NET developer', address: 'Guntur', department: 'IT', sex: 'M', education: 'MCA'},
    {eName: 'Veeru', eSalary: 40000, ePosition: 'Sr Engineer', address: 'Hyderabad', department: 'Mech', sex: 'M', education: 'B.tech'},
    {eName: 'Ravi', eSalary: 50000, ePosition: 'cloud analyst', address: 'Kattamuru', department: 'Analyst', sex: 'M', education: 'PG'},
    {eName: 'Lakshman', eSalary: 60000, ePosition: 'businessman', address: 'Sattenapalli', department: 'Cloud', sex: 'M', education: 'Masters'}
  ];


  getEmpFullDetails(_data){
    this.tempEmpobj = _data;
  }
}
