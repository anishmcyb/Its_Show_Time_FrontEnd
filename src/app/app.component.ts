import { Component } from '@angular/core';
import { FeedbackDialogService } from './services/feedback-dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ItsShowTime';

  constructor(private feedbackDialogService: FeedbackDialogService) { }

  openDialog() {
    this.feedbackDialogService.openDialog();
  }
}
