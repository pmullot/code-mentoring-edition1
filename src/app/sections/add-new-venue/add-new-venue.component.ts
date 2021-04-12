import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-venue',
  templateUrl: './add-new-venue.component.html',
  styleUrls: ['./add-new-venue.component.scss']
})
export class AddNewVenueComponent {
  public workingHoursForm: FormGroup;
  
  constructor(_fb: FormBuilder, protected _router: Router){

  }

  openingHours = new FormControl();
}
