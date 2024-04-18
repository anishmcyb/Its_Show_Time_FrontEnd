import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Movie } from '../../model/movie';
import { MovieService } from '../../services/movie.service';
import { Router } from '@angular/router';


function isValidUrl(control: FormControl): { [key: string]: any } | null {
  const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;

  if (control.value && !urlPattern.test(control.value)) {
    return { 'pattern': true }; // Use 'pattern' for the error key
  }
  
  return null;
}

// Function to get today's date in the format "YYYY-MM-DD"
function getTodayDate(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);
  return `${year}-${month}-${day}`;
}


@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.css'
})
export class AddMovieComponent {

  successMessage: string = ''; // Variable to hold success message
  today: string;

  constructor(private service: MovieService, private router: Router) {
    this.today = getTodayDate(); // Set today's date when the component initializes
  }

  movie = new FormGroup({
    movieName: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    language: new FormControl('', [Validators.required]),
    genre: new FormControl('', [Validators.required]),
    duration: new FormControl('', [Validators.required]),
    releaseDate: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    posterUrl: new FormControl('', [Validators.required, isValidUrl]),
    director: new FormControl('', [Validators.required]),
    directorUrl: new FormControl('', [Validators.required, isValidUrl]),
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
          this.successMessage = 'Movie added successfully'; // Set success message
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
    this.successMessage = ''; // Clear success message when form is reset
  }
  goBack() {
    this.router.navigate(['/Movies']); // Navigate back to the previous page
  }

}