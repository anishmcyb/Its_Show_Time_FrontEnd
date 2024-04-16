import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainAdminComponent } from './main-admin/main-admin.component';
import { EventAdminComponent } from './event-admin/event-admin.component';


const routes: Routes = [
  {
     path: 'Movies',
     component: MainAdminComponent
  },
  {
    path: 'Events',
    component:EventAdminComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
