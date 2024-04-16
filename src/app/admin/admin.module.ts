import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { MainAdminComponent } from './main-admin/main-admin.component';
import { EventAdminComponent } from './event-admin/event-admin.component';



@NgModule({
  declarations: [
    HomeComponent,
    MainAdminComponent,
    EventAdminComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports:[
    HomeComponent,
    MainAdminComponent,

  ]
})
export class AdminModule { }
