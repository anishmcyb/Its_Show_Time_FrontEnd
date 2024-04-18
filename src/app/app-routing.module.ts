import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import path from 'path';
import { MainComponent } from './homepage/main/main.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserLoginComponent } from './user-login/user-login.component';


const routes: Routes = [
   {    path:'',    component:MainComponent  },
  // {path:'',component:UserLoginComponent},
  { path: 'app-register', component: RegisterComponent },
  { path: 'app-login', component: LoginComponent },
  { path: 'app-admin-login', component: AdminLoginComponent },
  { path: 'app-admin-home', component: AdminHomeComponent } ,
  { path: 'app-user-login', component: UserLoginComponent },
  { path: 'app-user-home', component: UserHomeComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
