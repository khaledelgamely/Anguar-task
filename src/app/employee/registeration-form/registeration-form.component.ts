import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-registeration-form',
  templateUrl: './registeration-form.component.html',
  styleUrls: ['./registeration-form.component.css']
})
export class RegisterationFormComponent {

  // set form schema
  cardForm = new FormGroup({
    companyName: new FormControl('', [Validators.minLength(3), Validators.maxLength(15), Validators.required]),
    employeeName: new FormControl('', [Validators.minLength(3), Validators.maxLength(15), Validators.required]),
    idNo: new FormControl('', [Validators.required]),
    Dop: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required])
  })

  //inject service
  constructor( private __sharedService: SharedService ) {}


  //function that assign the form value to the property in service
  HandleAddToCard() {
    if (this.cardForm.valid) {
      this.__sharedService.employeeData = this.cardForm.value;
      this.cardForm.reset();
    }
  }

}
