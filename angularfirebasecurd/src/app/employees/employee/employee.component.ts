import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireList } from 'angularfire2/database'; 

import { EmployeeService } from '../shared/employee.service';
import { database } from 'firebase/app';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    
  }

  onSubmit(empdata){
    this.employeeService.insertEmployeeData(empdata.value);
  }

}
