import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindcityeventsComponent } from './findcityevents/findcityevents.component';
import { FilterEventsComponent } from './filterevents/filterevents.component';

const routes: Routes = [{ path: 'eventcity',component: FindcityeventsComponent  },
{ path: 'eventfilter',component: FilterEventsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
