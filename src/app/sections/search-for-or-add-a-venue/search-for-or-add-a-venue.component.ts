import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-for-or-add-a-venue',
  templateUrl: './search-for-or-add-a-venue.component.html',
  styleUrls: ['./search-for-or-add-a-venue.component.scss']
})
export class SearchForOrAddAVenueComponent implements OnInit {

  constructor( public _router: Router) { }

  ngOnInit(): void {
  }
  navigateToAddNewVenue(){
    this._router.navigate(['/user/addNewVenue']);
  }
}
