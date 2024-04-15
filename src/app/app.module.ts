import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { FeedbackModule } from './feedback/feedback.module';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { CarouselModule } from 'ngx-bootstrap/carousel';

=======
import { EventsModule } from './events/events.module';
import { HttpClient } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomepageModule } from './homepage/homepage.module';
>>>>>>> b500877e5d333b70d9bd91096a476e13b58f81df


@NgModule({
  declarations: [
<<<<<<< HEAD
    AppComponent
=======
    AppComponent,
>>>>>>> b500877e5d333b70d9bd91096a476e13b58f81df
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    FeedbackModule,
    HttpClientModule,
    MatDialogModule,
 
=======
    EventsModule,
    FormsModule,
    ReactiveFormsModule,
    HomepageModule
>>>>>>> b500877e5d333b70d9bd91096a476e13b58f81df
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
