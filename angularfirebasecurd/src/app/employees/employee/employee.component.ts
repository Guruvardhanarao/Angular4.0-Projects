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
    this.resetForm();
  }

  onSubmit(empdata: NgForm){
    if(empdata.value.$key == '') {
    this.employeeService.insertEmployeeData(empdata.value);
    this.resetForm(empdata);
  }
      else {
      this.employeeService.updateForm(empdata.value);
      
    }
  }

  resetForm(form?: NgForm) {
    if(form != null)
    form.reset();

    this.employeeService.selectedEmployee = {
      $key: '',
      name: '',
      position: '',
      salary: 0,
      office: ''
    }
  }

  deleteEmp(form: NgForm){
    if(confirm("do u want delete this record")==true){
    this.employeeService.deleteEmployee(form.value.$key);
    this.resetForm(form);
    }
  }

  

}
