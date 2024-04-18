import { Component } from '@angular/core';
import { Movie } from '../../model/movie';
import { MovieService } from '../../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {
  movies: Movie[] = [];

  constructor(private movieService: MovieService,private router: Router) { }

  ngOnInit(): void {
    this.getMovieDetails();
  }

  getMovieDetails(): void {
    this.movieService.getMovieDetails()
      .subscribe(movies => this.movies = movies);
  }

  deleteMovie(movieName: string): void {
    this.movieService.deleteMovie(movieName).subscribe(
      () => {
        console.log('Movie deleted successfully');
        // Refresh movie list after deletion
        this.getMovieDetails();
      },
      (error) => {
        console.error('Error occurred while deleting movie', error);
      }
    );
  }
  goBack() {
    this.router.navigate(['/Movies']); // Navigate back to the previous page
  }


}
