import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { DisplayEventsComponent } from './display-events/display-events.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEventsComponent } from './add-events/add-events.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { EventDetailsComponent } from './event-details/event-details.component';



@NgModule({
  declarations: [
    DisplayEventsComponent,
    SearchComponent,
    AddEventsComponent,
    UpdateEventComponent,
    EventDetailsComponent,
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    DisplayEventsComponent,
    SearchComponent,
    AddEventsComponent,
    UpdateEventComponent,
    EventDetailsComponent
  ]
})
export class EventsModule { }
