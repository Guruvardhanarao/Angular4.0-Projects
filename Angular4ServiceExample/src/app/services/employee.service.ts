import { Injectable } from '@angular/core';

@Injectable()


export class EmployeeService {

    employeesList: any[] = [
        {id: 'e101', name: 'Rahul', position: 'HR Manager', salary: 30000, department: 'Recruitement'},
        {id: 'e102', name: 'Poornima', position: 'Sales Executive', salary: 20000, department: 'Sales'},
        {id: 'e103', name: 'Vinni', position: 'Customer Relation', salary: 25000, department: 'Customer Support'},
        {id: 'e104', name: 'Guruvardhanarao', position: 'Sr.Developer', salary: 70000, department: 'Development'},
        {id: 'e105', name: 'Chiru', position: 'Jr.Developer', salary: 10000, department: 'Development'}
    ]

    constructor() {}

    getEmployee(id: string): any {
        let employee: any;
        let empExist: boolean= false;
        for(let i=0; i < this.employeesList.length; i++) {
            if(id === this.employeesList[i].id) {
                empExist=true;
                employee = this.employeesList[i];
                break;
            }
            
        }
        if(empExist){
            return employee;
        }
        else{
            return empExist;
        }
        
    }




}