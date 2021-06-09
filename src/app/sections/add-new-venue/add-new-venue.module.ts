import { ChangeDetectionStrategy, ChangeDetectorRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
// import { StepperComponent } from './stepper/stepper.component';


@NgModule({
  // declarations: [StepperComponent],i
  imports: [
    CommonModule,
    FormBuilder,
    FormGroup,
    Validators,
    MatStepperModule,
    MatCardModule,
    FormsModule,
  ]
})
export class AddNewVenueModule {
  

  
 }
