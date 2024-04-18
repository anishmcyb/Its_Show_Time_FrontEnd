import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../model/events';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  [x: string]: any;
  private baseUrl = 'http://localhost:8000/events/';

  constructor(private http: HttpClient) { }

  getEventsByGenre(genre: string): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseUrl}findByGenre?genre=${genre}`);
  }

  getEventsByCity(city: string): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseUrl}findByCity/${city}`);
  }
  getEventsByPriceRange(price: string): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseUrl}price-range/${price}`);
  }
  getEventsByArtist(artist: string): Observable<Event[]> { // New method to fetch events by artist
    return this.http.get<Event[]>(`${this.baseUrl}?artist=${artist}`);
  }
}
