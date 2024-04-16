import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { EventService } from '../../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-event',
  templateUrl: './delete-event.component.html',
  styleUrl: './delete-event.component.css'
})
export class DeleteEventComponent {

  eventName: string = '';

  constructor(private eventService: EventService,private router:Router) {}

  deleteEvent(eventForm: NgForm) {
    const eventName = eventForm.value.eventName;
    this.eventService.deleteEventByName(eventName).subscribe(
      (response) => {
        console.log('Movie deleted successfully');
        this.router.navigate(['/events/displayEvents'])
        // Handle success, e.g., show a message
      },
      (error) => {
        console.error('Error occurred while deleting movie');
        // Handle error, e.g., show an error message
      }
    );
  }

}
