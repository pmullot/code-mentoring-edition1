import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbStepperModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AddNewVenueComponent } from './sections/add-new-venue/add-new-venue.component';
import { SearchForOrAddAVenueComponent } from './sections/search-for-or-add-a-venue/search-for-or-add-a-venue.component';

const nebularImports = [NbThemeModule.forRoot({ name: 'cosmic' }), NbLayoutModule, NbEvaIconsModule, NbStepperModule]
@NgModule({
  declarations: [AppComponent, LandingPageComponent, AddNewVenueComponent, SearchForOrAddAVenueComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, BrowserAnimationsModule, ...nebularImports],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
