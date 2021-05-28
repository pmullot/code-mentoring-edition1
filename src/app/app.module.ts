import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddNewVenueComponent } from './sections/add-new-venue/add-new-venue.component';
import { SearchForOrAddAVenueComponent } from './sections/search-for-or-add-a-venue/search-for-or-add-a-venue.component';
import { ReactiveFormsModule } from '@angular/forms'; // Had to import this one but we're already using it so idk where/how we import it 

import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { GooglePlacesService } from './services/google-places.service';

@NgModule({
  declarations: [AppComponent, LandingPageComponent, AddNewVenueComponent, SearchForOrAddAVenueComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, BrowserAnimationsModule, ReactiveFormsModule, MatStepperModule, MatFormFieldModule, MatInputModule ],
  providers: [GooglePlacesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
