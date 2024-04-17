import { Component } from '@angular/core';

import { Subscription } from 'rxjs';
import { Movies } from '../../model/movies';
import { MoviesService } from '../../services/movies.service';
import { Router } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-display-movies',
  templateUrl: './display-movies.component.html',
  styleUrl: './display-movies.component.css'
})
export class DisplayMoviesComponent {

  movies:Movies[]|undefined
  subscription: Subscription;
  message:any;
  reload: boolean | undefined;

  constructor(private service : MoviesService,private router : Router){

    this.subscription = this.service.getMessage().subscribe((message) => {
      this.message = message;
      this.reload = true;
      this.movies = this.message;
      console.log(this.movies);
    });
  }

  ngOnInit(){
    this.service.displayMovies().subscribe({
      next:(response)=>{
        console.log("back to front end : next");
        console.log(response);
        this.movies=response;
      },
      error:(error)=>{
        console.log("back to front end : error");
        console.log(error);    
      },
      complete:()=>{
        console.log("back to frontend:complete: Done");
      }
    })
  }
  showMovieDetails(movie:any):void{
    this.router.navigate(['/movie/movie-page',movie.movieId]);
  }
}
