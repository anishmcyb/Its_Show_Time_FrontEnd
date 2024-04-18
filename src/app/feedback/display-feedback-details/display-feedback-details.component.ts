import { Component, Input } from '@angular/core';
import { Feedback } from '../../model/feedback';
import { FeedbackService } from '../../services/feedback.service';

@Component({
  selector: 'app-display-feedback-details',
  templateUrl: './display-feedback-details.component.html',
  styleUrl: './display-feedback-details.component.css'
})
export class DisplayFeedbackDetailsComponent {
  feedbacks:Feedback[] | undefined
  //Injecting service
  constructor(private service:FeedbackService){

  }
  ngOnInit(){
   this.service.getFeedbackDetails().subscribe({
    next : (response)=>
    {
      console.log("back to fornt-end: next");
      console.log(response)
      this.feedbacks=response
    },
   
   error : (error)=>
   {
    console.log("back to fornt-end: error");
    console.log(error)
   },
   complete : ()=>
   {
    console.log("back to fornt-end:complete Done");
   }
  })
    console.log(this.feedbacks)
  }

  @Input() items: any[] = [];
  currentIndex = 0;

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
  }

  prev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
  }
}
