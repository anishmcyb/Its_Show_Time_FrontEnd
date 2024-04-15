import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackRoutingModule } from './feedback-routing.module';
import { AddFeedbackComponent } from './add-feedback/add-feedback.component';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DisplayFeedbackDetailsComponent } from './display-feedback-details/display-feedback-details.component';


@NgModule({
  declarations: [
    AddFeedbackComponent,
    DisplayFeedbackDetailsComponent
    ],
  imports: [
    CommonModule,
    FeedbackRoutingModule,
    ReactiveFormsModule
    
  ],
  exports:[
    AddFeedbackComponent,
    DisplayFeedbackDetailsComponent
  ]
})
export class FeedbackModule { }
