import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  [x: string]: any;
  private baseUrl = 'http://localhost:8000/movies/';

  constructor(private http: HttpClient) { }

  getMoviesByCity(city: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.baseUrl}findByCity/${city}`);
  }

  getMoviesByLanguage(language: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.baseUrl}findByLanguage?language=${language}`);
  }

  getMoviesByGenre(genre: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.baseUrl}findByGenre?genre=${genre}`);
  }

  
}


