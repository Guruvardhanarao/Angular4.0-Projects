import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { EmployeeService } from './services/employee.service';
import { EmpDataComponent } from './custom-component/emp-data/emp-data.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpDataComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
