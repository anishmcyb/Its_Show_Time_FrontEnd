import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8000'; // Base URL of your backend

  constructor(private http: HttpClient) { }

  addUser(userData: any): Observable<any> {
    const url = `${this.baseUrl}/newUser`; // Endpoint URL for adding a new user
    return this.http.post(url, userData, { responseType: 'text'  }).pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle error
        console.error('Error adding user:', error);
        return throwError('Could not add user. Please try again later.'); // Throw custom error message
      })
    );
  }


  loginUser(userData: any): Observable<any> {
    const url = `${this.baseUrl}/Login`; // Endpoint URL for user login
    return this.http.post(url, userData, { responseType: 'text' as'json'}).pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle error
        console.error('Error logging in users:', error);
        return throwError('Could not log in. Please try again later.'); // Throw custom error message
      })
    );
  }
}
