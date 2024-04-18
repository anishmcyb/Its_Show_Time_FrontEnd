import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { FindcityeventsComponent } from './findcityevents/findcityevents.component';
import { FilterEventsComponent } from './filterevents/filterevents.component';


@NgModule({
  declarations: [
    FindcityeventsComponent,
    FilterEventsComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    
  ],
  exports:[
FindcityeventsComponent,
FilterEventsComponent
  ]
})
export class EventsModule { }
