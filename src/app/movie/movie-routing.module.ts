import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { DisplayMoviesComponent } from './display-movies/display-movies.component';

const routes: Routes = [
  {
  path:"movie",
  children:[
    {
    path:"insert",
    component:AddMovieComponent
    },
    {
      path:"display",
      component:MovieDetailsComponent
    },
    /*{
      path: 'delete/:movieName',
      component: DeleteMovieComponent
    },*/
    {
      path:"update/:id",
      component:UpdateMovieComponent
    },
    {
      path:"movie-page/:id",
      component:MoviePageComponent
    },
    {
      path:"showMovies",
      component:DisplayMoviesComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
