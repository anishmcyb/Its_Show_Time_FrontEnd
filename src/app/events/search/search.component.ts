import { Component } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Events } from '../../model/events';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  // eventName: string = '';
  // events:Events[] |undefined
  // subscription: Subscription;
  // message: any;
  
  // constructor(private eventService: EventsService,private router:Router) { 
  //   this.subscription = this.eventService.getMessage().subscribe((message) => {
  //     this.message = message;
  //     console.log(this.message);
  //   });
  // }

  // searchEvent(eventForm: NgForm) {
  //   this.eventService.searchByName(this.eventName).subscribe(
  //     (response) => {
  //       console.log(response);
  //       this.events = response;
  //      // this.router.navigate(['/events/displayEvents'])
  //       // Handle success, e.g., show a message
  //     },
  //     (error) => {
  //       console.error(error);
  //       // Handle error, e.g., show an error message
  //     }
  //   );
  // }
  // /*Display events*/
  // ngOnInit(){
  //   this.eventService.displayEvents().subscribe({
  //     next:(response)=>{
  //       console.log("back to front end:next");
  //       console.log(response);
  //       this.events=response;
  //     },
  //     error:(error)=>{
  //       console.log("Back to front end:error");
  //       console.log((error));
  //     },
  //     complete:()=>{
  //       console.log("Back to frontend : compelete :Done");
        
  //     }
  //   })
  // }
 
}
