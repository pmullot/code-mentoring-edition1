import { Component } from '@angular/core';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-stepper',
  template: `
  <mat-horizontal-stepper>
    <mat-step
      *ngFor="let step of field.fieldGroup; let index = index; let last = last;">
      <ng-template matStepLabel>{{ step.templateOptions.label }}</ng-template>
      <formly-field [field]="step"></formly-field>

      <div>
        <button matStepperPrevious *ngIf="index !== 0"
          class="btn btn-primary"
          type="button">
          Back
        </button>

        <button matStepperNext *ngIf="!last"
          class="btn btn-primary" type="button"
          [disabled]="false">
          Next
        </button>

        <button *ngIf="last" class="btn btn-primary"
          [disabled]="false"
          type="submit">
          Submit
        </button>
      </div>
    </mat-step>
  </mat-horizontal-stepper>
`,
})
export class FormlyFieldStepper extends FieldType {
//   isValid(field: FormlyFieldConfig) {
//     if (field.key) {
//       return field.formControl.valid;
//     }

//     return field.fieldGroup.every(f => this.isValid(f));
//   }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */