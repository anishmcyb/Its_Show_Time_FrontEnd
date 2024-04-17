import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedbackModule } from './feedback/feedback.module';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { MovieModule } from './movie/movie.module';
import { FormsModule } from '@angular/forms';
import { AdminModule } from './admin/admin.module';
import { AddMovieComponent } from './movie/add-movie/add-movie.component';
import { EventModule } from './event/event.module';
import { HomepageModule } from './homepage/homepage.module';
import { EventsModule } from './events/events.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeedbackModule,
    HttpClientModule,
    MatDialogModule,
 
    MovieModule,
    FormsModule,
    AdminModule,
    EventModule,
    EventsModule,
    HomepageModule

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
