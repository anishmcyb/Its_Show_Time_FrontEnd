import { Component } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Events } from '../../model/events';

@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.component.html',
  styleUrl: './add-events.component.css'
})
export class AddEventsComponent {
  constructor(private service: EventsService) {}

  event = new FormGroup({
    eventName: new FormControl('', [Validators.required]),
    language: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    genre: new FormControl('', [Validators.required]),
    duration: new FormControl('', [Validators.required]),
    releaseDate: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    posterUrl: new FormControl('', [Validators.required]),
    artist: new FormControl('', [Validators.required]),
    artistUrl: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  });

  insertEventDetails() {
    if (this.event.valid) {
      const eventData = new Events(
        this.event.value.eventName,
        this.event.value.city,
        this.event.value.language,
        this.event.value.genre,
        Number(this.event.value.duration),
        this.event.value.releaseDate,
        Number(this.event.value.price),
        this.event.value.posterUrl,
        this.event.value.artist,
        this.event.value.artistUrl,
        this.event.value.description
      );

      this.service.insertEventDetails(eventData).subscribe(
        (response) => {
          console.log('Event added successfully');
          //here we need to redirect to success page
          console.log(response);
        },
        (error) => {
          console.error('Error occurred while adding event');
          //here we need to redirect to error page
          console.error(error);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }

}
