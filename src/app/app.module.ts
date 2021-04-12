import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddNewVenueComponent } from './sections/add-new-venue/add-new-venue.component';
import { SearchForOrAddAVenueComponent } from './sections/search-for-or-add-a-venue/search-for-or-add-a-venue.component';
import { ReactiveFormsModule } from '@angular/forms'; // Had to import this one but we're already using it so idk 

import { NbThemeModule, NbLayoutModule, NbStepperModule, NbTimepickerModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

const nebularImports = [NbThemeModule.forRoot({ name: 'cosmic' }), NbLayoutModule, NbEvaIconsModule, NbStepperModule, NbTimepickerModule.forRoot()]
@NgModule({
  declarations: [AppComponent, LandingPageComponent, AddNewVenueComponent, SearchForOrAddAVenueComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, BrowserAnimationsModule, ReactiveFormsModule, ...nebularImports, ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
