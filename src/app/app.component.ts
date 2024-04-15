import { Component } from '@angular/core';
<<<<<<< HEAD
import { FeedbackDialogService } from './services/feedback-dialog.service';
=======
>>>>>>> b500877e5d333b70d9bd91096a476e13b58f81df

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ItsShowTime';
<<<<<<< HEAD

  constructor(private feedbackDialogService: FeedbackDialogService) { }

  openDialog() {
    this.feedbackDialogService.openDialog();
  }
=======
>>>>>>> b500877e5d333b70d9bd91096a476e13b58f81df
}
