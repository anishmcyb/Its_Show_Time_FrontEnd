import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Events } from '../model/events';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  url:string="http://localhost:8000/events"
  constructor(private http:HttpClient) { }

  private messageSubject = new BehaviorSubject<any>('');

  sendMessage(message: any) {
    this.messageSubject.next(message);
  }

  getMessage(): Observable<any> {
    return this.messageSubject.asObservable();
  }

  displayEvents():Observable<Events[]>
  {
    return this.http.get<Events[]>(`${this.url}/displayEvents`)
  }
 
 

  insertEventDetails(event:Events):Observable<Events>//post
  {
    return this.http.post<Events>(`${this.url}/addEvent`,event)
  }

  displayEventById(id:number):Observable<Events>
  {
    return this.http.get<Events>(`${this.url}/displayEventById/${id}`)
  }


  deleteEventByName(eventName: string): Observable<any> {
    return this.http.delete(`${this.url}/deleteEventByName/${eventName}`, { responseType: 'text' as 'json' });
  }

  updateEventDetails(event:Events):Observable<Events>
  {
    return this.http.put<Events>(`${this.url}/updateEvent`,event)
  }

  // deleteMovieByName(movieName: string): Observable<any> {
  //   return this.http.delete(`${this.url}/deleteMovieByName/${movieName}`, { responseType: 'text' as 'json' });
  // }



}
