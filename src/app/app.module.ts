import { ChangeDetectionStrategy, NgModule } from '@angular/core';
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
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';

import { GooglePlacesService } from './services/google-places.service';

import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyFieldStepper } from '@sections/add-new-venue/stepper.type';


@NgModule({
  declarations: [AppComponent, LandingPageComponent, AddNewVenueComponent, SearchForOrAddAVenueComponent, FormlyFieldStepper],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    FormlyMaterialModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
      types: [
       { name: 'stepper', component: FormlyFieldStepper, wrappers: [] },
      ],
    }),
  ],
  providers: [GooglePlacesService],
  bootstrap: [AppComponent],
})
export class AppModule {}