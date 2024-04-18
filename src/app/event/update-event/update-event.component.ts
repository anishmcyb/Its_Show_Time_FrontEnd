import { Component } from '@angular/core';
import { Events } from '../../model/events';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrl: './update-event.component.css'
})
export class UpdateEventComponent {
  id: number = 0;
  event: Events | undefined;
  constructor(private service: EventService, private r: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let eventId: string | null = this.r.snapshot.paramMap.get("id");
    if (eventId != null) {
      this.id = parseInt(eventId)
      console.log(this.id);
    }
    //call the service for eventById
    //assign repsonse to the event
    this.service.displayEventById(this.id).subscribe({
      next: (response) => {
        console.log("back to frontend");
        console.log(response);
        this.event = response;
        //to display the values on form
        this.eve.patchValue({
          eventName: this.event.eventName,
          language: this.event.language,
          city: this.event.city,
          genre: this.event.genre,
          duration: this.event.duration?.toString(),
          releaseDate: this.event.releaseDate,
          price: this.event.price?.toString(),
          posterUrl: this.event.eventPosterUrl,
          artist: this.event.artist,
          artistUrl: this.event.artistUrl,
          description: this.event.description
        } as Partial<{
          eventName: string;
          language: string;
          city: string;
          genre: string;
          duration: string;
          releaseDate: string;
          price: string;
          posterUrl: string;
          artist: string;
          artistUrl: string;
          description: string;
        }>);
      },
      error: (error) => {
        console.log("Back to frontend:error");
        console.log(error);
      }
    })
  }

  eve = new FormGroup({
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

  updateEventDetails = () => {
    console.log("Inside update method");
    console.log(this.eve.value);

    const updatedEvent = new Events(
      this.eve.value.eventName,
      this.eve.value.language,
      this.eve.value.city,
      this.eve.value.genre,
      Number(this.eve.value.duration),
      this.eve.value.releaseDate,
      Number(this.eve.value.price),
      this.eve.value.posterUrl,
      this.eve.value.artist,
      this.eve.value.artistUrl,
      this.eve.value.description,
    );
    updatedEvent.eventId = this.id;

    this.service.updateEventDetails(updatedEvent).subscribe(
      (response) => {
        console.log("back to frontend");
        console.log(response);
        this.router.navigate(['events/displayEvents'])
      },
      (error) => {
        console.log("bacl to front end with error");
        console.log(error);
      }
    )
  }


}
