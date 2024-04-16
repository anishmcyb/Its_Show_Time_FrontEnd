import { Component } from '@angular/core';
import { Events } from '../../model/events';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.css'
})
export class EventDetailsComponent {
  events: Events[] = [];

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.displayEvents();
  }

  displayEvents(): void {
    this.eventService.displayEvents()
      .subscribe(events => this.events = events);
  }

}
