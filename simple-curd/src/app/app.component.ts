import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee Register';
  addFormShow: boolean = true;
  EditFormShow: boolean = true;
  newEmp: any = {};
  newEmp1: any = {};
  indexValue: number;
  employees: any[] = [
    {name: 'Veerababu', position: 'Automobile Engineer'},
    {name: 'Narasimharao', position: 'Designer'}
  ];


  addEmployee(){
    this.employees.push(this.newEmp);
    this.newEmp = {};
    this.addFormShow = true;
  }

  removeEmp(i) {
    this.employees.splice(i,1);
  }

  editEmp(k) {
    this.newEmp1.name = this.employees[k].name;
    this.newEmp1.position = this.employees[k].position;
    this.indexValue = k;
    this.EditFormShow = false;
    this.addFormShow = true;
  }

  updateEmployee() {
    for(let i=0; i<this.employees.length; i++) {
      if(i == this.indexValue) {
        this.employees[i] = this.newEmp1;
        this.newEmp1 = {};
      }
    }
  }

  showAddForm() {
    this.addFormShow = false;
    this.EditFormShow = true;
  }



}
