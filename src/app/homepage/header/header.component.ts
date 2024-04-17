import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventsService } from '../../services/events.service';
import { Router } from '@angular/router';
import { Events } from '../../model/events';
import { MoviesService } from '../../services/movies.service';
import { Movies } from '../../model/movies';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  eventName: string = '';
  events: Events[] | undefined
  movies: Movies[] | undefined

  searchTerm: string = '';
  lastSegment: string = '';

  constructor(private eventService: EventsService, private movieService: MoviesService, private router: Router) { }

  onOpen() {
    console.log("srrrrrr")
  }

  onInput(value: string) {
    // Handle input changes here if needed
  }
  clearInput() {
    const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement;
    searchInput.value = '';
  }


  search(searchTerm1: string) {
    // console.log("URL - "+this.router.url.split("/")[])

    const segments = this.router.url.split("/");
    this.lastSegment = segments[segments.length - 1];
    console.log(this.lastSegment);
    // Add your search logic here using the searchTerm
    console.log('Searching for:', searchTerm1);
    if (this.lastSegment == "showEvents") {
      this.eventService.searchByName(searchTerm1).subscribe(
        (response) => {
          console.log(response);
          this.events = response;
          console.log(this.events);
          this.eventService.sendMessage(this.events);
        },
        (error) => {
          console.error(error);
          // Handle error, e.g., show an error message
        }
      );
    } else if (this.lastSegment == "showMovies") {
      this.movieService.searchByName(searchTerm1).subscribe(
        (response) => {
          console.log(response);
          this.movies = response;
          console.log(this.movies);
          this.movieService.sendMessage(this.movies);
        },
        (error) => {
          console.error(error);
          // Handle error, e.g., show an error message
        }
      );
    }


  }
}
