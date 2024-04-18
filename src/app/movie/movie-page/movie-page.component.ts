import { Component } from '@angular/core';
import { Movies } from '../../model/movies';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { FeedbackService } from '../../services/feedback.service';
import { Feedback } from '../../model/feedback';


@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrl: './movie-page.component.css'
})
export class MoviePageComponent {
  movie : Movies | undefined;
  movieId: number | undefined;
  subscription: Subscription;

  feedbacks: Feedback[] = []; // Define the feedbacks property


  constructor(
    private route: ActivatedRoute,
    private feedbackService : FeedbackService,
    private service: MoviesService,
    private router: Router,
    private feedbackDialogService: FeedbackService
  ) {
    this.subscription = this.service.getMessage().subscribe((message) => {
      this.movie = message;
      console.log(this.movie);
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.movieId = params['id'];
      this.fetchMovieDetails();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  fetchMovieDetails(): void {
    if (this.movieId) {
      this.service.displayMovieById(this.movieId).subscribe(movie => {
        this.movie = movie;
      });
    } else {
      console.error('Invalid eventId:', this.movieId);
    }
  }

  goBack(): void {
    this.router.navigate(['/movie']);
  }

  
  openDialog() {
    this.feedbackDialogService.openDialog();
  }
  
  feedbackOfMovie(movie: any): void {
    this.feedbackService.feedbackOfMovie(movie.movieName).subscribe(
      (feedbacks: Feedback[]) => {
        this.feedbacks = feedbacks;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
