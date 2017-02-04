import { Routes, RouterModule } from '@angular/router';
import {MenuComponent} from "./main/menu.component";
import {LoginComponent} from "./login/login.component";

export const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'menu', component: MenuComponent},
  {path: '**', redirectTo: '/login', pathMatch: 'full'}
];

export const  routing = RouterModule.forRoot(APP_ROUTES);
