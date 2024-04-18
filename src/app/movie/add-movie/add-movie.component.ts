import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Movie } from '../../model/movie';
import { MovieService } from '../../services/movie.service';


function isValidUrl(control: FormControl): { [key: string]: any } | null {
  const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;

  if (control.value && !urlPattern.test(control.value)) {
    return { 'pattern': true }; // Use 'pattern' for the error key
  }
  
  return null;
}
@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.css'
})
export class AddMovieComponent {

  constructor(private service: MovieService) {}

  movie = new FormGroup({
    movieName: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    language: new FormControl('', [Validators.required]),
    genre: new FormControl('', [Validators.required]),
    duration: new FormControl('', [Validators.required]),
    releaseDate: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    posterUrl: new FormControl('', [Validators.required,isValidUrl]),
    director: new FormControl('', [Validators.required]),
    directorUrl: new FormControl('', [Validators.required,isValidUrl]),
    description: new FormControl('', [Validators.required])
  });


 
  insertMovieDetails() {
    if (this.movie.valid) {
      const movieData = new Movie(
        this.movie.value.movieName,
        this.movie.value.city,
        this.movie.value.language,
        this.movie.value.genre,
        Number(this.movie.value.duration),
        this.movie.value.releaseDate,
        Number(this.movie.value.price),
        this.movie.value.posterUrl,
        this.movie.value.director,
        this.movie.value.directorUrl,
        this.movie.value.description
      );

      this.service.insertMovieDetails(movieData).subscribe(
        (response) => {
          console.log('Movie added successfully');
          console.log(response);
        },
        (error) => {
          console.error('Error occurred while adding movie');
          console.error(error);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }

  clearForm() {
    this.movie.reset(); // This resets the form values
}

}