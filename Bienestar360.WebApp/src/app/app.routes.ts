import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { AvailabilityConfigurerComponent } from './components/inner-users/availability-configurer/availability-configurer.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'available-times', component:AvailabilityConfigurerComponent}
];
