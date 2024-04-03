import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedService } from 'src/app/shared.service';

import { RegisterationFormComponent } from './registeration-form.component';

describe('RegisterationFormComponent', () => {
  let component: RegisterationFormComponent;
  let fixture: ComponentFixture<RegisterationFormComponent>;
  let __service: SharedService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterationFormComponent]
    });
    fixture = TestBed.createComponent(RegisterationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Form should be invalid', () => {
    component.cardForm.controls['companyName'].setValue('');
    component.cardForm.controls['employeeName'].setValue('');
    component.cardForm.controls['idNo'].setValue('');
    component.cardForm.controls['Dop'].setValue('');
    component.cardForm.controls['email'].setValue('');

    expect(component.cardForm.valid).toBeFalsy();
  });

  it('Form should be valid', () => {
    component.cardForm.controls['companyName'].setValue('mindTorches');
    component.cardForm.controls['employeeName'].setValue('khaled');
    component.cardForm.controls['idNo'].setValue('1');
    component.cardForm.controls['Dop'].setValue('MM/DD/YYYY');
    component.cardForm.controls['email'].setValue('khaled@gmail.com');

    expect(component.cardForm.valid).toBeTruthy();
  });

  it('should set submitted to be true', () => {
    component.HandleAddToCard()
    
    expect(__service.employeeData).toEqual(component.cardForm.value)
  })
});
