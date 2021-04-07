import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
 // import { UserModule } from './sections/user/user.module';  idk why this doesn't import the module

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./sections/auth/auth.module').then((m) => m.AuthModule), 
  },
  {
    path: 'user',
    loadChildren: () => import('./sections/user/user.module').then((m) => m.UserModule), 
  },
  {
    path: 'home',
    loadChildren: () => import('./sections/home/home.module').then((m) => m.HomeModule), 
  },
  {
    path: '',
    component: LandingPageComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
