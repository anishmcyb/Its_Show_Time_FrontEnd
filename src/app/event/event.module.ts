import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { AddEventComponent } from './add-event/add-event.component';
import { DeleteEventComponent } from './delete-event/delete-event.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AddEventComponent,
    DeleteEventComponent,
    EventDetailsComponent,
    UpdateEventComponent
  ],
  imports: [
    CommonModule,
    EventRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule

  ],
  exports:[
    AddEventComponent,
    DeleteEventComponent,
    EventDetailsComponent,
    UpdateEventComponent
  ]
})
export class EventModule { }
