import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './unprotected/signin.component';
import { SignupComponent } from './unprotected/signup.component';
import { ProtectedComponent}  from "./protected/protected.component";

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full' },
  { path: 'signup', component:  SignupComponent},
  { path: 'signin', component: SigninComponent },
  { path: 'protected', component: ProtectedComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
