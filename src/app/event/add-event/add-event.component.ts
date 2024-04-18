import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventService } from '../../services/event.service';
import { Events } from '../../model/events';
import { Router } from '@angular/router';


function isValidUrl(control: FormControl): { [key: string]: any } | null {
  const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;

  if (control.value && !urlPattern.test(control.value)) {
    return { 'pattern': true }; // Use 'pattern' for the error key
  }
  
  return null;
}

function getTodayDate(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);
  return `${year}-${month}-${day}`;
}



@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css'
})
export class AddEventComponent {

  successMessage: string = '';
  today: string;

  constructor(private service: EventService, private router: Router) {
    this.today = getTodayDate();
  }

  

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
  clearForm() {
    this.event.reset(); // Reset the form
    this.successMessage = ''; // Clear success message
  }

  goBack() {
    this.router.navigate(['/Events']);
  }




}
