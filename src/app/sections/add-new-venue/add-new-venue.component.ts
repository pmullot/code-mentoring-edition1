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
            key: 'WorkingHoursMonday',
            fieldGroup:[
              {
                key: 'opensAt',
                type: 'input',
                templateOptions:{
                  type: 'time',
                  label: 'Opening Time',
                  required: true
                }
              },
              {
                key: 'closesAt',
                type: 'input',
                 templateOptions:{
                  type: 'time',
                  label: 'Closing Time',
                  required: true
                }
              }
            ],       
          },
          {
            key: 'WorkingHoursTuesday',
            fieldGroup:[
              {
                key: 'opensAt',
                type: 'input',
                templateOptions:{
                  type: 'time',
                  label: 'Opening Time',
                  required: true
                }
              },
              {
                key: 'closesAt',
                type: 'input',
                 templateOptions:{
                  type: 'time',
                  label: 'Closing Time',
                  required: true
                }
              }
            ],       
          },
          {
            key: 'WorkingHoursWednesday',
            fieldGroup:[
              {
                key: 'opensAt',
                type: 'input',
                templateOptions:{
                  type: 'time',
                  label: 'Opening Time',
                  required: true
                }
              },
              {
                key: 'closesAt',
                type: 'input',
                 templateOptions:{
                  type: 'time',
                  label: 'Closing Time',
                  required: true
                }
              }
            ],       
          },
          {
            key: 'WorkingHoursThursday',
            fieldGroup:[
              {
                key: 'opensAt',
                type: 'input',
                templateOptions:{
                  type: 'time',
                  label: 'Opening Time',
                  required: true
                }
              },
              {
                key: 'closesAt',
                type: 'input',
                 templateOptions:{
                  type: 'time',
                  label: 'Closing Time',
                  required: true
                }
              }
            ],       
          },
          {
            key: 'WorkingHoursFriday',
            fieldGroup:[
              {
                key: 'opensAt',
                type: 'input',
                templateOptions:{
                  type: 'time',
                  label: 'Opening Time',
                  required: true
                }
              },
              {
                key: 'closesAt',
                type: 'input',
                 templateOptions:{
                  type: 'time',
                  label: 'Closing Time',
                  required: true
                }
              }
            ],       
          },
          {
            key: 'WorkingHoursSaturday',
            fieldGroup:[
              {
                key: 'opensAt',
                type: 'input',
                templateOptions:{
                  type: 'time',
                  label: 'Opening Time',
                  required: true
                }
              },
              {
                key: 'closesAt',
                type: 'input',
                 templateOptions:{
                  type: 'time',
                  label: 'Closing Time',
                  required: true
                }
              }
            ],       
          },
          {
            key: 'WorkingHoursSunday',
            fieldGroup:[
              {
                key: 'opensAt',
                type: 'input',
                templateOptions:{
                  type: 'time',
                  label: 'Opening Time',
                  required: true
                }
              },
              {
                key: 'closesAt',
                type: 'input',
                 templateOptions:{
                  type: 'time',
                  label: 'Closing Time',
                  required: true
                }
              }
            ],       
          },
        ],
      }, // Overview Step
      {
        templateOptions: { label: 'Overview' },
        fieldGroup: [
          {
            key: 'venueNameOverview',
            type: 'input',
            templateOptions: {
              label: 'Name',
              required: true,
            },
          },
          {
            key: 'venueAddressOverview',
            type: 'input',
            templateOptions: {
              label: 'Address',
              required: true,
            }
          },
          {
            key: 'WorkingHoursMondayOverview',
            fieldGroup:[
              {
                key: 'opensAt',
                type: 'input',
                templateOptions:{
                  type: 'time',
                  label: 'Opening Time',
                  required: true
                }
              },
              {
                key: 'closesAt',
                type: 'input',
                 templateOptions:{
                  type: 'time',
                  label: 'Closing Time',
                  required: true
                }
              }
            ],       
          },
          {
            key: 'WorkingHoursTuesdayOverview',
            fieldGroup:[
              {
                key: 'opensAt',
                type: 'input',
                templateOptions:{
                  type: 'time',
                  label: 'Opening Time',
                  required: true
                }
              },
              {
                key: 'closesAt',
                type: 'input',
                 templateOptions:{
                  type: 'time',
                  label: 'Closing Time',
                  required: true
                }
              }
            ],       
          },
          {
            key: 'WorkingHoursWednesdayOverview',
            fieldGroup:[
              {
                key: 'opensAt',
                type: 'input',
                templateOptions:{
                  type: 'time',
                  label: 'Opening Time',
                  required: true
                }
              },
              {
                key: 'closesAt',
                type: 'input',
                 templateOptions:{
                  type: 'time',
                  label: 'Closing Time',
                  required: true
                }
              }
            ],       
          },
          {
            key: 'WorkingHoursThursdayOverview',
            fieldGroup:[
              {
                key: 'opensAt',
                type: 'input',
                templateOptions:{
                  type: 'time',
                  label: 'Opening Time',
                  required: true
                }
              },
              {
                key: 'closesAt',
                type: 'input',
                 templateOptions:{
                  type: 'time',
                  label: 'Closing Time',
                  required: true
                }
              }
            ],       
          },
          {
            key: 'WorkingHoursFridayOverview',
            fieldGroup:[
              {
                key: 'opensAt',
                type: 'input',
                templateOptions:{
                  type: 'time',
                  label: 'Opening Time',
                  required: true
                }
              },
              {
                key: 'closesAt',
                type: 'input',
                 templateOptions:{
                  type: 'time',
                  label: 'Closing Time',
                  required: true
                }
              }
            ],       
          },
          {
            key: 'WorkingHoursSaturdayOverview',
            fieldGroup:[
              {
                key: 'opensAt',
                type: 'input',
                templateOptions:{
                  type: 'time',
                  label: 'Opening Time',
                  required: true
                }
              },
              {
                key: 'closesAt',
                type: 'input',
                 templateOptions:{
                  type: 'time',
                  label: 'Closing Time',
                  required: true
                }
              }
            ],       
          },
          {
            key: 'WorkingHoursSundayOverview',
            fieldGroup:[
              {
                key: 'opensAt',
                type: 'input',
                templateOptions:{
                  type: 'time',
                  label: 'Opening Time',
                  required: true
                }
              },
              {
                key: 'closesAt',
                type: 'input',
                 templateOptions:{
                  type: 'time',
                  label: 'Closing Time',
                  required: true
                }
              }
            ],       
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
    this.model = {
      ...this.model,
      venueNameOverView: this.venueName,
      venueAddressOverview: this.venueAddress,
    };
    console.log(this.model.workingHoursMonday.opensAt);
  }
  
}
