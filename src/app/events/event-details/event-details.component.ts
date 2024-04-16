import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from '../../services/events.service';
import { Subscription } from 'rxjs';
import { Events } from '../../model/events';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit, OnDestroy {

  event: Events | undefined;
  eventId: number | undefined;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private service: EventsService,
    private router: Router
  ) {
    this.subscription = this.service.getMessage().subscribe((message) => {
      this.event = message;
      console.log(this.event);
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.eventId = params['id'];
      this.fetchEventDetails();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  fetchEventDetails(): void {
    if (this.eventId) {
      this.service.displayEventById(this.eventId).subscribe(event => {
        this.event = event;
      });
    } else {
      console.error('Invalid eventId:', this.eventId);
    }
  }

  goBack(): void {
    this.router.navigate(['/events']);
  }
}
