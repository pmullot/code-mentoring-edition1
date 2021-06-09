import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Venue } from '../../core/models/venue.model';
@Component({
  selector: 'app-add-new-venue',
  templateUrl: './add-new-venue.component.html',
  styleUrls: ['./add-new-venue.component.scss'],
})
export class AddNewVenueComponent {
  venueName: Venue['name'];
  owner: Venue['owner']; // We need to grab this from the currently logged in user
  venueAddress: Venue['Address'];
  zipCode: Venue['zipCode'];
  workingHours: Venue['workingHours'];

  
  constructor(public _formBuilder: FormBuilder, private _changeDetectionRef: ChangeDetectorRef) {}
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  
  fields: FormlyFieldConfig[] = [{
    type: 'stepper',
    fieldGroup: [
      {
        templateOptions: { label: 'Venue Name' },
        fieldGroup: [
          {
            key: 'venueName',
            type: 'input',
            templateOptions: {
              label: 'name',
              required: true,
            },
          },
        ],
      },
      {
        templateOptions: { label: 'Venue Address' },
        fieldGroup: [
          {
            key: 'venueAddress',
            type: 'input',
            templateOptions: {
              label: 'address',
              required: true,
            },
          },
        ],
      },
      {
        templateOptions: { label: 'working Hours' },
        fieldGroup: [
          {
            key: 'WorkingHoursMondayStart',
            type: 'input',
            templateOptions: {
              type: 'time',
              label: 'time',
              required: true,
            },
          },
          {
            key: 'WorkingHoursMondayEnd',
            type: 'input',
            templateOptions: {
              type: 'time',
              label: 'time',
              required: true,
            },
          },
          {
            key: 'WorkingHoursTuesdayStart',
            type: 'input',
            templateOptions: {
              type: 'time',
              label: 'time',
              required: true,
            },
          },
          {
            key: 'WorkingHoursTuesdayEnd',
            type: 'input',
            templateOptions: {
              type: 'time',
              label: 'time',
              required: true,
            },
          },
          {
            key: 'WorkingHoursWednesdayStart',
            type: 'input',
            templateOptions: {
              type: 'time',
              label: 'time',
              required: true,
            },
          },
          {
            key: 'WorkingHoursWednesdayEnd',
            type: 'input',
            templateOptions: {
              type: 'time',
              label: 'time',
              required: true,
            },
          },
          {
            key: 'WorkingHoursThursdayStart',
            type: 'input',
            templateOptions: {
              type: 'time',
              label: 'time',
              required: true,
            },
          },
          {
            key: 'WorkingHoursThursdayEnd',
            type: 'input',
            templateOptions: {
              type: 'time',
              label: 'time',
              required: true,
            },
          },
          {
            key: 'WorkingHoursFridayStart',
            type: 'input',
            templateOptions: {
              type: 'time',
              label: 'time',
              required: true,
            },
          },
          {
            key: 'WorkingHoursFridayEnd',
            type: 'input',
            templateOptions: {
              type: 'time',
              label: 'time',
              required: true,
            },
          },
          {
            key: 'WorkingHoursSaturdayStart',
            type: 'input',
            templateOptions: {
              type: 'time',
              label: 'time',
              required: true,
            },
          },
          {
            key: 'WorkingHoursSaturdayEnd',
            type: 'input',
            templateOptions: {
              type: 'time',
              label: 'time',
              required: true,
            },
          },
          {
            key: 'WorkingHoursSundayStart',
            type: 'input',
            templateOptions: {
              type: 'time',
              label: 'time',
              required: true,
            },
          },
          {
            key: 'WorkingHoursSundayEnd',
            type: 'input',
            templateOptions: {
              type: 'time',
              label: 'time',
              required: true,
            },
          },
        ],
      },
      {
        templateOptions: { label: 'Overview' },
        fieldGroup: [
          {
            key: 'venueOverview',
            type: 'input',
            templateOptions: {
              label: '',
              required: true,
            },
          },
        ],
      },
    ],
  }];
  submit() {
    alert(JSON.stringify(this.model));
    console.log(this.model.venueName)
  }

  onModelChange(){
    console.log('model Changed!');
    this.model.venueOverview = this.model.venueName;
    this._changeDetectionRef.detectChanges();
  }
  
}
