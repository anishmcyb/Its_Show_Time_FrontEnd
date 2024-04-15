import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFeedbackComponent } from './add-feedback/add-feedback.component';
import { DisplayFeedbackDetailsComponent } from './display-feedback-details/display-feedback-details.component';

const routes: Routes = [
  {
    path :"feedback",
    children : [
      {
        path : "addFeedback",
        component : AddFeedbackComponent
      },
      {
        path : "displayFeedback",
        component : DisplayFeedbackDetailsComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedbackRoutingModule { }
