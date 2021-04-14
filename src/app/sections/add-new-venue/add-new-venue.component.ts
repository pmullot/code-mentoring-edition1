import { 
  Component,
  ElementRef,
  ViewChild
 } from '@angular/core';
 import { fromEvent } from 'rxjs';
 import { debounceTime } from 'rxjs/operators';
 import { GooglePlacesService } from '../../services/google-places.service';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OpeningTime, Venue } from '@core/models/venue.model';

@Component({
  selector: 'app-add-new-venue',
  templateUrl: './add-new-venue.component.html',
  styleUrls: ['./add-new-venue.component.scss']
})
export class AddNewVenueComponent {
  @ViewChild('text')
  text: ElementRef<HTMLInputElement>;

  public places$ = this._placesService.results$.asObservable();
  public workingHoursForm: FormGroup;
  openingHours: FormControl;
  
  workingHoursMonday: OpeningTime = {
    weekDay : 1,
    openAt: new Date('1111-02-32'),
    closeAt: new Date('1113-02-58')
  }
  workingHoursTuesday: OpeningTime = {
    weekDay : 2,
    openAt: new Date('1111-02-32'),
    closeAt: new Date('1113-02-58')
  }
  workingHoursWednesday: OpeningTime = {
    weekDay : 3,
    openAt: new Date('1111-02-32'),
    closeAt: new Date('1113-02-58')
  }
  workingHoursThursday: OpeningTime = {
    weekDay : 4,
    openAt: new Date('1111-02-32'),
    closeAt: new Date('1113-02-58')
  }
  workingHoursFriday: OpeningTime = {
    weekDay : 5,
    openAt: new Date('1111-02-32'),
    closeAt: new Date('1113-02-58')
  }
  workingHoursSaturday: OpeningTime = {
    weekDay : 6,
    openAt: new Date('1111-02-32'),
    closeAt: new Date('1113-02-58')
  }
  workingHoursSunday: OpeningTime = {
    weekDay : 7,
    openAt: new Date('1111-02-32'),
    closeAt: new Date('1113-02-58')
  }

  
  
  constructor(
    private _placesService: GooglePlacesService,
    public _fb: FormBuilder,
    protected _router: Router
  ) {}

  ngAfterViewInit(): void {
    fromEvent(this.text.nativeElement, 'input')
      .pipe(debounceTime(300))
      .subscribe((event) => {
        this.findPlaces(this.text.nativeElement.value);
      });
  }

  public findPlaces(value: any): void {
    this._placesService.getPredictions(value)
  }
}
