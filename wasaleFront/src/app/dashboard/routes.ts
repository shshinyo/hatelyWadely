import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    children: [

      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      }
      ,
      {
        path: 'login',
        component: LoginComponent,
        // canDeactivate: ['canDeactivateRegister']
      },
    ]
  }
];
