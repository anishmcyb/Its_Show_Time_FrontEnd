import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesModule } from './movies/movies.module';
import { FormsModule } from '@angular/forms';
import { FindcityeventsComponent } from './events/findcityevents/findcityevents.component';
import { EventsModule } from './events/events.module';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Import HttpClientModule here
    AppRoutingModule,
    MoviesModule,
    FormsModule,
    EventsModule,
    
  ],
  providers: [], // Remove HttpClient and EventsModule from providers array
  bootstrap: [AppComponent]
})
export class AppModule { }
