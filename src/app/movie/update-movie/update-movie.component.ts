import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../../model/movie';
import { MovieService } from '../../services/movie.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrl: './update-movie.component.css'
})
export class UpdateMovieComponent {

  id: number = 0;
  movie: Movie | undefined;
  constructor(private service: MovieService, private r: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let movieId: string | null = this.r.snapshot.paramMap.get("id");
    if (movieId != null) {
      this.id = parseInt(movieId)
      console.log(this.id);
    }
    //call the service for movieById
    //assign repsonse to the movie
    this.service.getmovieById(this.id).subscribe({
      next: (response) => {
        console.log("back to frontend");
        console.log(response);
        this.movie = response;
        //to display the values on form
        this.mov.patchValue({
          movieName: this.movie.movieName,
          language: this.movie.city,
          city: this.movie.language,
          genre: this.movie.genre,
          duration: this.movie.duration?.toString(),
          releaseDate: this.movie.releaseDate,
          price: this.movie.price?.toString(),
          posterUrl: this.movie.posterUrl,
          director: this.movie.director,
          directorUrl: this.movie.directorUrl,
          description: this.movie.description
        } as Partial<{
          eventName: string;
          language: string;
          city: string;
          genre: string;
          duration: string;
          releaseDate: string;
          price: string;
          posterUrl: string;
          director: string;
          directorUrl: string;
          description: string;
        }>);
      },
      error: (error) => {
        console.log("Back to frontend:error");
        console.log(error);
      }
    })
  }

  mov = new FormGroup({
    movieName: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    language: new FormControl('', [Validators.required]),
    genre: new FormControl('', [Validators.required]),
    duration: new FormControl('', [Validators.required]),
    releaseDate: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    posterUrl: new FormControl('', [Validators.required]),
    director: new FormControl('', [Validators.required]),
    directorUrl: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  });

  updateMovieDetails = () => {
    console.log("Inside update method");
    console.log(this.mov.value);

    const updatedMovie = new Movie(
      this.mov.value.movieName,
      this.mov.value.city,
      this.mov.value.language,
     
      this.mov.value.genre,
      Number(this.mov.value.duration),
      this.mov.value.releaseDate,
      Number(this.mov.value.price),
      this.mov.value.posterUrl,
      this.mov.value.director,
      this.mov.value.directorUrl,
      this.mov.value.description,
    );
    updatedMovie.movieId = this.id;

    this.service.updateMovieDetails(updatedMovie).subscribe(
      (response) => {
        console.log("back to frontend");
        console.log(response);
        this.router.navigate(['movie/display'])
      },
      (error) => {
        console.log("back to front end with error");
        console.log(error);
      }
    )
  }


}