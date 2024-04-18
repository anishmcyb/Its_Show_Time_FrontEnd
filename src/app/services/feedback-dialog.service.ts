import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddFeedbackComponent } from '../feedback/add-feedback/add-feedback.component';

@Injectable({
  providedIn: 'root'
})
export class FeedbackDialogService {

  
  constructor(private dialog: MatDialog) { }

  openDialog(): void {
    this.dialog.open(AddFeedbackComponent, {
      width: '400px', 
      height : '650px'
    });
  }
}
