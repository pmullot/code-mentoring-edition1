import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-new-venue',
  templateUrl: './add-new-venue.component.html',
  styleUrls: ['./add-new-venue.component.scss']
})
export class AddNewVenueComponent {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  forthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.secondFormGroup = this._formBuilder.group({
      venueName: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      venueAddress: ['', Validators.required]
    });
    this.forthFormGroup = this._formBuilder.group({
      workingHoursMondayStart:['', Validators.required],
      workingHoursMondayEnd:['', Validators.required],
      workingHoursTuesdayStart:['', Validators.required],
      workingHOursTuesdayEnd:['', Validators.required],
      workingHoursWednesdayStart:['', Validators.required],
      workingHoursWednesdayEnd:['', Validators.required],
      workingHoursThursdayStart:['', Validators.required],
      workingHoursThursdayEnd:['', Validators.required],
      workingHoursFridayStart:['', Validators.required],
      workingHOursFridayEnd:['', Validators.required],
      workingHoursSaturdayStart:['', Validators.required],
      workingHoursSaturdayEnd:['', Validators.required],
      workingHoursSundayStart:['', Validators.required],
      workingHOursSundayEnd:['', Validators.required],
    });
    this.fifthFormGroup = this._formBuilder.group({
      venueOverview:['', Validators.required]
    })
  }
}
