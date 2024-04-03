import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterationFormComponent } from './registeration-form/registeration-form.component';
import { EmployeeCardComponent } from './employee-card/employee-card.component';



@NgModule({
  declarations: [
    RegisterationFormComponent,
    EmployeeCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EmployeeModule { }
