import { Component } from '@angular/core';
import { Events } from '../../model/events';
import { EventService } from '../../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.css'
})
export class EventDetailsComponent {
  events: Events[] = [];

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit(): void {
    this.displayEvents();
  }

  displayEvents(): void {
    this.eventService.displayEvents()
      .subscribe(events => this.events = events);
  }

  deleteEvent(eventName: string): void {
    this.eventService.deleteEventByName(eventName).subscribe(
      () => {
        console.log('Event deleted successfully');
        // Refresh event list after deletion
        this.displayEvents();
      },
      (error) => {
        console.error('Error occurred while deleting event', error);
      }
    );
  }

  goBack() {
    this.router.navigate(['/Events']); // Navigate back to the previous page
  }

}
