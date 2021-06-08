import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
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

  constructor(public _formBuilder: FormBuilder) {}

  array = new FormArray([]);
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  workingHoursArray = new FormArray([]);
  forthFormGroup: FormGroup;

  addFirstFormGroup() {
    this.array.push(new FormControl(this.firstFormGroup.controls.venueName.value));
    this.array.push(new FormControl(this.secondFormGroup.controls.venueAddress.value));
  }

  addSecondFormGroup() {
    this.array.push(new FormControl(this.secondFormGroup.controls.venueAddress.value));
  }

  addThirdFormGroup() {
    this.array.push(new FormControl(this.thirdFormGroup.controls.workingHoursMondayStart.value));
    this.array.push(new FormControl(this.thirdFormGroup.controls.workingHoursMondayEnd.value));
    this.array.push(new FormControl(this.thirdFormGroup.controls.workingHoursTuesdayStart.value));
    this.array.push(new FormControl(this.thirdFormGroup.controls.workingHoursTuesdayEnd.value));
    this.array.push(new FormControl(this.thirdFormGroup.controls.workingHoursWednesdayStart.value));
    this.array.push(new FormControl(this.thirdFormGroup.controls.workingHoursWednesdayEnd.value));
    this.array.push(new FormControl(this.thirdFormGroup.controls.workingHoursThursdayStart.value));
    this.array.push(new FormControl(this.thirdFormGroup.controls.workingHoursThursdayEnd.value));
    this.array.push(new FormControl(this.thirdFormGroup.controls.workingHoursFridayStart.value));
    this.array.push(new FormControl(this.thirdFormGroup.controls.workingHoursFridayEnd.value));
    this.array.push(new FormControl(this.thirdFormGroup.controls.workingHoursSaturdayStart.value));
    this.array.push(new FormControl(this.thirdFormGroup.controls.workingHoursSaturdayEnd.value));
    this.array.push(new FormControl(this.thirdFormGroup.controls.workingHoursSundayStart.value));
    this.array.push(new FormControl(this.thirdFormGroup.controls.workingHoursSundayEnd.value));
    
    console.log(this.thirdFormGroup.controls.workingHoursMondayEnd)
  }


  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      venueName: [''],
      venueAddress: ['']
    });
    this.secondFormGroup = this._formBuilder.group({
      venueAddress: [''],
    });
    this.thirdFormGroup = this._formBuilder.group({
      workingHoursMondayStart: [''],
      workingHoursMondayEnd: [''],
      workingHoursTuesdayStart: [''],
      workingHoursTuesdayEnd: [''],
      workingHoursWednesdayStart: [''],
      workingHoursWednesdayEnd: [''],
      workingHoursThursdayStart: [''],
      workingHoursThursdayEnd: [''],
      workingHoursFridayStart: [''],
      workingHoursFridayEnd: [''],
      workingHoursSaturdayStart: [''],
      workingHoursSaturdayEnd: [''],
      workingHoursSundayStart: [''],
      workingHoursSundayEnd: [''],
    });
    this.forthFormGroup = this._formBuilder.group({
      array: this.array,
    });
  }
}
