import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventService } from '../../services/event.service';
import { Events } from '../../model/events';


function isValidUrl(control: FormControl): { [key: string]: any } | null {
  const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;

  if (control.value && !urlPattern.test(control.value)) {
    return { 'pattern': true }; // Use 'pattern' for the error key
  }
  
  return null;
}

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css'
})
export class AddEventComponent {

  constructor(private service: EventService) {}

  event = new FormGroup({
    eventName: new FormControl('', [Validators.required]),
    language: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    genre: new FormControl('', [Validators.required]),
    duration: new FormControl('', [Validators.required]),
    releaseDate: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    posterUrl: new FormControl('', [Validators.required,isValidUrl]),
    artist: new FormControl('', [Validators.required]),
    artistUrl: new FormControl('', [Validators.required,isValidUrl]),
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
