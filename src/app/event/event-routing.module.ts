import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEventComponent } from './add-event/add-event.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { DeleteEventComponent } from './delete-event/delete-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';

const routes: Routes = [
  {
    path:"events",
    children:[
      {
        path:"insertEvent",
        component:AddEventComponent
      },
      {
        path:"displayEvents",
        component:EventDetailsComponent
      },
      {
        path:"delete/:eventName",
        component:DeleteEventComponent
      },
      
      {
        path:"updateEvent/:id",
        component:UpdateEventComponent
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
