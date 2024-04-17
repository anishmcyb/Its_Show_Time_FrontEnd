import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DisplayMoviesComponent } from './display-movies/display-movies.component';
import { MoviePageComponent } from './movie-page/movie-page.component';


@NgModule({
  declarations: [
    AddMovieComponent,
    MovieDetailsComponent,
    DeleteMovieComponent,
    UpdateMovieComponent,
    DisplayMoviesComponent,
    MoviePageComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    AddMovieComponent,
    MovieDetailsComponent,
    DeleteMovieComponent,
    UpdateMovieComponent,
    DisplayMoviesComponent,
    MoviePageComponent
  ]
})
export class MovieModule { }
