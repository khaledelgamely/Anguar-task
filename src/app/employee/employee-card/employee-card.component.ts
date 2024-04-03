import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent {


  //inject the service
  constructor(public __sharedService: SharedService){}

  //declare a boolean property
  isFlipped = false;

  //function that toggle the card when been clicked
  toggleFlip() {
    this.isFlipped = !this.isFlipped;
  }
  
}
