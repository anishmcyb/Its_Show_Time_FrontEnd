import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feedback } from '../model/feedback';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AddFeedbackComponent } from '../feedback/add-feedback/add-feedback.component';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  url : string = "http://localhost:8000/feedback"

  constructor(private http: HttpClient,private dialog: MatDialog) { }

  insertFeedbackDetails(feedback: Feedback): Observable<Feedback> {
    return this.http.post<Feedback>(`${this.url}/addFeedback`,feedback);
  }

  getFeedbackDetails():Observable<Feedback[]>
  {
    // return this.customers;
    return this.http.get<Feedback[]>(`${this.url}/displayAll`)
  }
  openDialog(): void {
    this.dialog.open(AddFeedbackComponent, {
      width: '400px', 
      height : '650px'
    });
  }
 
}
