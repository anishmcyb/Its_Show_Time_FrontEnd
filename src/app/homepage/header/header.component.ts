import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventsService } from '../../services/events.service';
import { Router } from '@angular/router';
import { Events } from '../../model/events';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  eventName: string = '';
  events:Events[] |undefined

  searchTerm: string = '';

  constructor(private eventService: EventsService,private router:Router) { }
  
  onOpen(){
    console.log("srrrrrr")
  }
  search(searchTerm1: string) {
    // Add your search logic here using the searchTerm
    console.log('Searching for:', searchTerm1);
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
  }
}
