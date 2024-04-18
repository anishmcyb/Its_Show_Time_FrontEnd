import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { BookingComponent } from './BookingApp/booking/booking.component';
import { ConfirmBookingComponent } from './BookingApp/confirm-booking/confirm-booking.component';
import { BookingService } from './services/booking-service.service';
import { AppRoutingModule } from './app-routing.module';
import { PaymentComponent } from './BookingApp/payment/payment.component';
import { PaymentConfirmationComponent } from './BookingApp/payment-confirmation/payment-confirmation.component';
import { WalletComponent } from './BookingApp/wallet/wallet.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    ConfirmBookingComponent,
    PaymentComponent,
    PaymentConfirmationComponent,
    WalletComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule 
    // RouterModule.forRoot([
    //   { path: 'add-booking', component: BookingComponent },
    //   { path: 'add-confirm-booking', component: ConfirmBookingComponent }
    // ])
  ],
  providers: [BookingService, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
