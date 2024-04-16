import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieModule } from './movie/movie.module';
import { FormsModule } from '@angular/forms';
import { AdminModule } from './admin/admin.module';
import { AddMovieComponent } from './movie/add-movie/add-movie.component';
import { EventModule } from './event/event.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MovieModule,
    FormsModule,
    AdminModule,
    EventModule
    

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
