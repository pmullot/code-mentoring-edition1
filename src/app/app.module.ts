import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [AppComponent, LandingPageComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
