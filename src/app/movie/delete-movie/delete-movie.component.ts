import { Component } from '@angular/core';


import { MovieService } from '../../services/movie.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrl: './delete-movie.component.css'
})
export class DeleteMovieComponent {
  movieName: string = '';

  constructor(private movieService: MovieService,private router:Router) {}

  deleteMovie(movieForm: NgForm) {
    const movieName = movieForm.value.movieName;
    this.movieService.deleteMovieByName(movieName).subscribe(
      (response) => {
        console.log('Movie deleted successfully');
        this.router.navigate(['/movie/display'])
        // Handle success, e.g., show a message
      },
      (error) => {
        console.error('Error occurred while deleting movie');
        // Handle error, e.g., show an error message
      }
    );
  }
  }

